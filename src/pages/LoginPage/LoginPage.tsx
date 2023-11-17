import React, { useRef } from "react"

import {
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { firebaseAuth } from "models/firebase"
import { FirebaseError } from "@firebase/util"
import { Navigate, useNavigate } from "react-router"

const LoginPage = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        console.log("Login Button!!")

        const data = new FormData(event.target as HTMLFormElement)

        const email = data.get("email")!.toString()
        const password = data.get("password")!.toString()

        try {
            const { user } = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            )

            alert(`Welcome!!`)
            navigate("/")
        } catch (err) {
            console.log(err)
            if (err instanceof FirebaseError) {
                switch (err.code) {
                    case "auth/user-not-found":
                    case "auth/invalid-email":
                        alert("등록된 사용자 정보가 없습니다")
                        emailRef.current?.focus()
                        break
                    case "auth/wrong-password":
                        alert("입력된 정보가 잘못되었습니다.")
                        passwordRef.current?.focus()
                        break
                    default:
                        alert("로그인 중 오류가 발생했습니다.")
                        break
                }
            } else {
                console.error(err)
            }
        }

        // axios
        //     .post("http://localhost:7777/auth/signin", {
        //         email: email,
        //         password: password,
        //     })
        //     .then((response) => {
        //         // console.log(response.data)
        //         // console.log(response.data.name)
        //         onClose()
        //         localStorage.setItem("ACCESS_TOKEN", response.data.token)
        //         localStorage.setItem("USER_NAME", response.data.name)
        //         localStorage.setItem("USER_EMAIL", response.data.email)
        //         localStorage.setItem("ID", response.data.id)
        //         window.location.href = "/"
        //     })
        //     .catch((error) => {
        //         console.error(error)
        //         alert("Wrong ID or Password")

        //         return
        //     })
    }

    return (
        <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "5%", marginBottom: "10%" }}
        >
            <Grid item xs={12} style={{ margin: "20px" }}>
                <Typography component="h1" variant="h5">
                    로그인
                </Typography>
            </Grid>
            <form noValidate onSubmit={handleSubmit}>
                {" "}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            inputRef={emailRef}
                            label="이메일 주소"
                            name="email"
                            autoComplete="email"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            type="password"
                            variant="outlined"
                            required
                            inputRef={passwordRef}
                            fullWidth
                            id="password"
                            label="패스워드"
                            name="password"
                            autoComplete="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            로그인
                        </Button>
                    </Grid>

                    <Grid container justifyContent="flex-end">
                        <Link href="/signup" variant="body2">
                            <Grid item>
                                계정이 없습니까? 여기서 가입하세요.
                            </Grid>
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default LoginPage

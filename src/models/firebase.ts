import { initializeApp } from "firebase/app"
// import { initializeApp } from "firebase-admin/app"
// import { getFirestore } from "firebase/firestore"
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app);
// const db = getFirestore(app)
const firebaseAuth = getAuth(app)

export {
    firebaseAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
}
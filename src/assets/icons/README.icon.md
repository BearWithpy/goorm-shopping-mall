# icon을 component처럼 사용하기

-   참고: https://velog.io/@rootcho/React%EC%97%90%EC%84%9C-svg%ED%8C%8C%EC%9D%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94-%EB%B2%95

```
<svg
viewBox="0 0 24 24"
preserveAspectRatio="xMidYMid meet"
focusable="false"
style="pointer-events: none; display: block;
width: "current"; //"current"로 수정
height: "current"; //"current"로 수정
"
>
<g>
    <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" ></path>
</g>
</svg>
```

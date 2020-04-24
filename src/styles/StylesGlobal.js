import { createGlobalStyle } from 'styled-components'

export const StylesGlobal = createGlobalStyle`
  html {
    background: #ffffff;
    box-sizing: border-box;
    font-family: -Arial, Helvetica, sans-serif;
  }
ul, li, h1,h2,h3, p, button {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
a {
  text-decoration:none;
}
body {
  overscroll-behavior: none;
  height: 100vh;
  /* width: 100fr; */
}


`

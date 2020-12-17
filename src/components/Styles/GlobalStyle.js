import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}


a,
a:visited,
a:hover,
a:focus {
  text-decoration: none;
}

img {
  border-style: none;
  display: block;
  max-width: 100%;
  height: auto;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  border: none;
  display: inline-block;
}

button:hover,
button:focus,
input:hover,
input:focus {
  outline: none;
}

ul,
li {
  list-style: none;
}

body {
  margin:0;  
  /* background-color: #1d1d1d; */
  background-color: #0f0f0f;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

h1 {
  font-family: 'Rubik', sans-serif;
  padding: 0;
  margin: 0;
}

 h2, h3, h4 {
  font-family: 'Russo One', sans-serif;  
  padding: 0;
  margin: 0;
  letter-spacing: 0.1em;
}

button {
  cursor:pointer;
}
`;

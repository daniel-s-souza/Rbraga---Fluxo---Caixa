import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  font-family: Arial, Helvetica, sans-serif;
  --sb-track-color: #f0f2f5;
  --sb-thumb-color: #046ee5;
  --sb-size: 5px;
  overflow-x: hidden;

  scrollbar-color: var(--sb-thumb-color) 
                   var(--sb-track-color)
}

body::-webkit-scrollbar {
  width: var(--sb-size);
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 10px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 10px;
}
`
export default GlobalStyle;
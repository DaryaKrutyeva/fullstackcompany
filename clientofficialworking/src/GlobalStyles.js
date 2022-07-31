import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #051622;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1 {
  color: #1ba098;
  font-size: 3em;
  font-weight: normal;
}

h2 {
  color: white;
  font-size: 2em;
  font-weight: normal;
}

h3 {
  font-weight: normal;
}

p {
  font-size: 1.25em;
}
`;

export default GlobalStyle;

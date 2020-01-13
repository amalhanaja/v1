import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&display=swap');
    html {
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-top: 8px;
        margin-bottom: 8px;
    }
    p {
        margin-top: 4px;
        margin-bottom: 4px; 
    }
    body {
        width: 100%;
        min-height: 100vh;
        margin: 0;
        overflow-x: hidden;
        background: #FCF7F1;
        font-family: Quicksand, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif
    }
`

export default GlobalStyle;
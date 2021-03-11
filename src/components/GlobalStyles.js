import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &:: -webkit-scrollbar {
            width: 0.5rem;
        }
        &:: -webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }
    body {
        font-family: 'Inter', sans-serif;
        width: 100%
    }
    h2 {
        font-size: rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
    }
`;

export default GlobalStyles;

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,600;1,400&display=swap');
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        letter-spacing: 0.07rem;
    }
    
    #root {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
    }
`;
export default Global;

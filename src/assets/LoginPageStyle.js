import styled from "styled-components"

const LoginPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    img {
        width: 200px;
        filter: drop-shadow(0 0 0.75rem);
        margin: 20px;
    }
    
    h1 {
        font-family: 'Saira Stencil One';
        font-size: 32px;
        color: white;
        margin-bottom: 40px;
    }

    p{
        font-size: 15px;
        color: white;
        margin-top: 23px;
        font-weight: 700;
    }
`

export default LoginPageStyle
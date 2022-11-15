import styled from "styled-components"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
        width: 356px;
        height: 58px;
        border-radius: 5px;
        border: none;
        margin-bottom: 13px;
        padding: 10px;
        font-size: 20px;
        &::placeholder{
            color: dimgray;
            font-size: 20px;
            padding: 10px;
            font-style: italic;
        }
    }
    button {
        width: 356px;
        height: 58px;
        background-color: #A446D7;
        border-radius: 5px;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            filter: brightness(1.5);
        }
    }
`

export default FormStyle
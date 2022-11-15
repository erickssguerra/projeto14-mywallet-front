import styled from "styled-components"

export default function StatementPage() {
    return (
        <StatementPageStyle>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>
            <ul>
                <p>Não há registros de entrada ou saída</p>
            </ul>
            <ButtonsContainer>
                <button>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </button>
                <button>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </button>
            </ButtonsContainer>
        </StatementPageStyle>
    )
}

const StatementPageStyle = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    header {
        display: flex;
        width: 360px;
        justify-content: space-between;
        margin: 25px;
        h1 {
            font-size: 26px;
            color: white;
            font-weight: 700;
        }
        ion-icon {
            color: white;
            font-size: 30px;
            cursor: pointer;
        }
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: center;  // "flex-start" => lista com itens || "center" => lista vazia
        justify-content: center; //"space-between" => lista com itens || "center" => lista vazia
        width: 360px;
        height: 446px;
        background-color: white;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 13px;
        
        p { //usado para a mensagem "Não há registros de entrada ou saída"
            font-size: 20px;
            color: #868686;
            font-weight: 400;
            line-height: 24px;
            text-align: center;
            width: 180px;
        }
    }
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: space-between;
    justify-content: space-between;
    width: 360px;
    height: 115px;
    button {
        width: 48%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #A446D7;
        border-radius: 5px;
        border: none;
        padding: 10px;
        cursor: pointer;
    }
    p {
        color: white;
        font-size: 17px;
        width: 64px;
        text-align: left;
    }
    ion-icon {
        color: white;
        font-size: 30px;
    }
`
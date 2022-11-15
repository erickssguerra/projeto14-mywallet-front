import styled from "styled-components"
import StatementCard from "./StatementCard"

export default function StatementPage() {
    return (
        <StatementPageStyle>
            <header>
                <h1>Olá, Fulano</h1>
                <ion-icon name="log-out-outline"></ion-icon>
            </header>
            <section>
                <ul>
                    <StatementCard />
                    <StatementCard />
                    <StatementCard />
                    <StatementCard />
                </ul>
                <div className="total">
                    <h2>SALDO</h2> <span>2893.11</span>
                </div>
            </section>
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
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between; //"space-between" => lista com itens || "center" => lista vazia
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
        ul {
            width: 100%;
        }

        .total {
            display: flex;
            justify-content: space-between;
            width: 100%;
            font-size: 17px;
            h2{
                font-weight: 700;
                color: black;
            }
            span{
                color: #03AC00; //muda a cor para "#C70000" se o valor for < 0
            }
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
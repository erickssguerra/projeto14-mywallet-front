import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import StatementCard from "./StatementCard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Auth"
import axios from "axios"

import { rotatingLines } from "../assets/Loading-spinners.js"

export default function StatementPage() {

    const { name, token } = useContext(AuthContext)
    const [items, setItems] = useState("")
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

    function logout() {
        navigate("/")
        window.location.reload()
    }

    function sum(items) {
        let sum = 0
        for (let i = 0; i < items.length; i++) {
            if (items[i].type === "withdraw") {
                sum = sum - Number(items[i].price)
            }
            if (items[i].type === "deposit") {
                sum = sum + Number(items[i].price)
            }
        }
        return sum.toFixed(2)
    }

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get("https://mywallet-api-srvi.onrender.com/transactions", config)
        promise.then((res) => {
            setTotal(sum(res.data))
            setItems(res.data)
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            navigate("/")
            window.location.reload()
        })
    }, [navigate, token, items])

    return (
        <StatementPageStyle isEmpty={items.length === 0} isPositive={total >= 0}>
            <header>
                <h1>Olá, {name}</h1>
                <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
            </header>
            <section>
                {!items ? rotatingLines : items.length === 0 ? <p>Não há registros de entrada ou saída</p> :
                    <>
                        <ul>
                            {items.map((item, i) => <StatementCard item={item} key={i} />)}
                        </ul>
                        <div className="total">
                            <h2>SALDO</h2> <span>{total.replace("-", "")}</span>
                        </div>
                    </>
                }
            </section>
            <ButtonsContainer>
                <Link to="/entrada">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </Link>
                <Link to="/saida">
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </Link>
            </ButtonsContainer>
        </StatementPageStyle>
    )
}

const StatementPageStyle = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
        justify-content: ${({ isEmpty }) => (isEmpty ? "center" : "space-between")}; //"space-between" => lista com itens || "center" => lista vazia
        width: 360px;
        height: 60%;
        background-color: white;
        overflow-y: scroll;
        scrollbar-width: none;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 13px;
        ::-webkit-scrollbar {
            display: none;
        }
        
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
                color: ${({ isPositive }) => (isPositive ? "#03AC00;" : "#C70000")} ; //muda a cor para "#C70000" se o valor for < 0
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
    
    a {
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
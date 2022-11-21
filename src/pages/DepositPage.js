import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"
import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs"
import { AuthContext } from "../context/Auth"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { ovalSpinner } from "../assets/Loading-spinners.js"

export default function DepositPage() {

    const navigate = useNavigate()
    const { token } = useContext(AuthContext)
    const [form, setForm] = useState({ price: "", description: "" })
    const [isBlocked, setIsBlocked] = useState(false)

    function inputControl(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
            type: "deposit",
            day: dayjs().format("DD/MM")
        })
    }

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get("https://mywallet-api-srvi.onrender.com/transactions", config)
        promise.then((res) => {
            console.log({ message: "Você está logado" })
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            navigate("/")
            window.location.reload()
        })

    }, [navigate, token])

    function deposit(event) {
        setIsBlocked(true)
        event.preventDefault()

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        form.price = Number(form.price).toFixed(2)

        const promise = axios.post("https://mywallet-api-srvi.onrender.com/transactions", form, config)
        promise.then((res) => {
            console.log(res.data.message)
            navigate("/extrato")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            navigate("/")
            window.location.reload()
        })
    }

    return (
        <TransactionPageStyle>
            <h1>Nova entrada</h1>
            <FormStyle onSubmit={deposit}>
                <input
                    type="text"
                    placeholder="Valor"
                    name="price"
                    pattern="[-+]?[0-9]*\.?[0-9]*"
                    onChange={inputControl}
                    value={form.price}
                    required
                    disabled={isBlocked}
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    onChange={inputControl}
                    value={form.description}
                    required
                    disabled={isBlocked}
                />
                <button type="submit">
                    {isBlocked ? ovalSpinner : "Salvar entrada"}
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}

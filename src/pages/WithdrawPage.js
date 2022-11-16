import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"
import { useContext, useEffect, useState } from "react"
import dayjs from "dayjs"
import { AuthContext } from "../context/Auth"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function WithdrawPage() {

    const { token } = useContext(AuthContext)
    const navigate = useNavigate()
    const [form, setForm] = useState({ price: "", description: "" })

    function inputControl(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
            type: "withdraw",
            day: dayjs().format("DD/MM")
        })
    }

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const promise = axios.get("http://localhost:5000/transactions", config)
        promise.then((res) => {
            console.log({ message: "Você está logado" })
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            navigate("/")
            window.location.reload()
        })

    }, [navigate, token])

    function withdraw(event) {
        event.preventDefault()

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        form.price = Number(form.price).toFixed(2)

        const promise = axios.post("http://localhost:5000/transactions", form, config)
        promise.then((res) => {
            console.log(res.data.message)
            navigate("/extrato")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            navigate("/")
        })
    }

    return (
        <TransactionPageStyle>
            <h1>Nova saída</h1>
            <FormStyle onSubmit={withdraw}>
                <input
                    type="text"
                    placeholder="Valor"
                    name="price"
                    pattern="[-+]?[0-9]*\.?[0-9]*"
                    onChange={inputControl}
                    value={form.price}
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    onChange={inputControl}
                    value={form.description}
                    required
                />
                <button>
                    Salvar saída
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}
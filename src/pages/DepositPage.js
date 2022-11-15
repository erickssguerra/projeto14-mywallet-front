import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"
import { useState } from "react"

export default function DepositPage() {

    const [form, setForm] = useState({ price: "", description: "" })

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function deposit(event) {
        event.preventDefault()
        console.log(form)
    }

    return (
        <TransactionPageStyle>
            <h1>Nova entrada</h1>
            <FormStyle onSubmit={deposit}>
                <input
                    type="text"
                    placeholder="Valor"
                    name="price"
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
                    Salvar entrada
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}

import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"
import { useState } from "react"

export default function DepositPage() {

    const [form, setForm] = useState({ price: "", description: "" })

    function inputControl(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
            type: "deposit"
        })
    }

    function deposit(event) {
        event.preventDefault()
        form.price = Number(form.price).toFixed(2)
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
                    Salvar entrada
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}

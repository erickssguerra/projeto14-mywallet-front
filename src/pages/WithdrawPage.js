import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"
import { useState } from "react"

export default function WithdrawPage() {

    const [form, setForm] = useState({ price: "", description: "" })

    function inputControl(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
            type: "withdraw"
        })
    }

    function withdraw(event) {
        event.preventDefault()
        form.price = Number(form.price).toFixed(2)
        console.log(form)
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
import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"

export default function DepositPage() {
    return (
        <TransactionPageStyle>
            <h1>Nova entrada</h1>
            <FormStyle>
                <input
                    type="text"
                    placeholder="Valor"
                    name="price"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="description"
                    required
                />
                <button>
                    Salvar entrada
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}

import TransactionPageStyle from "../assets/TransactionPageStyle"
import FormStyle from "../assets/FormStyle"

export default function WithdrawPage() {
    return (
        <TransactionPageStyle>
            <h1>Nova saída</h1>
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
                    Salvar saída
                </button>
            </FormStyle>
        </TransactionPageStyle>
    )
}
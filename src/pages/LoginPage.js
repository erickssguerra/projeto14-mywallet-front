import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"

export default function LoginPage() {
    return (
        <LoginPageStyle>
            <img src={logo} alt="logo" />
            <h1>MyWallet</h1>
            <FormStyle onSubmit={() => alert("Teste Login")}>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    required
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    required
                />
                <button>Entrar</button>
            </FormStyle>
            <p>Primeira vez? Cadastre-se!</p>
        </LoginPageStyle>
    )
}


import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"

export default function RegisterPage() {
    return (
        <LoginPageStyle>
            <img src={logo} alt="logo" />
            <h1>MyWallet</h1>
            <FormStyle onSubmit={() => alert("Teste Registro")}>
                <input
                    type="text"
                    placeholder="Nome"
                    name="name"
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password2"
                    required
                />
                <button>Cadastrar</button>
            </FormStyle>
            <p>Já tem uma conta? Entre agora!</p>
        </LoginPageStyle>
    )
}
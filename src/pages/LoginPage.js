import { useState } from "react";
import { Link } from "react-router-dom"

import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"


export default function LoginPage() {

    const [form, setForm] = useState({ email: "", password: "" })

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function login(event) {
        event.preventDefault();
        console.log(form);
    }

    return (
        <LoginPageStyle>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <h1>MyWallet</h1>
            <FormStyle onSubmit={login}>
                <input
                    placeholder="email"
                    type="email"
                    name="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                />
                <input
                    placeholder="senha"
                    type="password"
                    name="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                />
                <button>Entrar</button>
            </FormStyle>
            <Link to="/cadastro">
                <p>
                    Primeira vez? Cadastre-se!
                </p>
            </Link>
        </LoginPageStyle>
    )
}


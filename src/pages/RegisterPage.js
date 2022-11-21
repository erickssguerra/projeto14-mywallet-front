import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"

export default function RegisterPage() {

    const navigate = useNavigate()
    const [form, setForm] = useState({ name: "", email: "", password: "", password2: "" })

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function signUp(event) {
        event.preventDefault()
        if (form.password !== form.password2) {
            alert("Senha não coincide!")
            return
        }
        delete form.password2
        const promise = axios.post("https://mywallet-api-srvi.onrender.com/sign-up", form)
        promise.then(() => {
            navigate("/")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
        })
    }

    return (
        <LoginPageStyle>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <h1>MyWallet</h1>
            <FormStyle onSubmit={signUp}>
                <input
                    placeholder="Nome"
                    type="text"
                    name="name"
                    minLength="2"
                    onChange={inputControl}
                    value={form.name}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password2"
                    onChange={inputControl}
                    value={form.password2}
                    required
                />
                <button>Cadastrar</button>
            </FormStyle>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </LoginPageStyle>
    )
}
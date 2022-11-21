import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"
import { AuthContext } from "../context/Auth";
import { ovalSpinner } from "../assets/Loading-spinners.js";


export default function LoginPage() {

    const navigate = useNavigate()
    const [form, setForm] = useState({ email: "", password: "" })
    const [isBlocked, setIsBlocked] = useState(false)
    const { setToken, setName } = useContext(AuthContext)

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function login(event) {
        setIsBlocked(true)
        event.preventDefault();
        const promise = axios.post("https://mywallet-api-srvi.onrender.com/sign-in", form)
        promise.then((res) => {
            setToken(res.data.token)
            setName(res.data.name)
            navigate("/extrato")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setIsBlocked(false)
        })

    }

    return (
        <LoginPageStyle>
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <h1>MyWallet</h1>
            <FormStyle onSubmit={login}>
                <input
                    placeholder="E-mail"
                    type="email"
                    name="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                    disabled={isBlocked}
                />
                <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                    disabled={isBlocked}
                />
                <button type="submit">
                    {isBlocked ? ovalSpinner : "Entrar"}
                </button>
            </FormStyle>
            <Link to="/cadastro">
                <p>
                    Primeira vez? Cadastre-se!
                </p>
            </Link>
        </LoginPageStyle>
    )
}


import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { Oval } from "react-loader-spinner"

import FormStyle from "../assets/FormStyle"
import LoginPageStyle from "../assets/LoginPageStyle"
import logo from "../assets/logo.png"

export default function RegisterPage() {

    const navigate = useNavigate()
    const [form, setForm] = useState({ name: "", email: "", password: "", password2: "" })
    const [isBlocked, setIsBlocked] = useState(false)

    function inputControl(event) {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    }

    function signUp(event) {
        setIsBlocked(true)
        event.preventDefault()
        if (form.password !== form.password2) {
            setIsBlocked(false)
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
            setIsBlocked(false)
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
                    disabled={isBlocked}
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    name="email"
                    onChange={inputControl}
                    value={form.email}
                    required
                    disabled={isBlocked}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    name="password"
                    onChange={inputControl}
                    value={form.password}
                    required
                    disabled={isBlocked}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    name="password2"
                    onChange={inputControl}
                    value={form.password2}
                    required
                    disabled={isBlocked}
                />
                <button type="submit">
                    {isBlocked ?
                        <Oval
                        height={30}
                        width={30}
                        color="#ffffff"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#993399"
                        strokeWidth={10}
                        strokeWidthSecondary={10}
                      
                      /> : "Cadastrar"}
                </button>
            </FormStyle>
            <Link to="/"><p>Já tem uma conta? Entre agora!</p></Link>
        </LoginPageStyle>
    )
}
import GlobalStyle from "./assets/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import StatementPage from "./pages/StatementPage"
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage"

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle /><Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<RegisterPage />} />
                <Route path="/extrato" element={<StatementPage />} />
                <Route path="/entrada" element={<DepositPage />} />
                <Route path="/saida" element={<WithdrawPage />} />
            </Routes>
        </BrowserRouter>
    )
}
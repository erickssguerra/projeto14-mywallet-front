import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [token, setToken] = useState("")
    const [name, setName] = useState("")

    return (
        <AuthContext.Provider value={{
            token, setToken,
            name, setName
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
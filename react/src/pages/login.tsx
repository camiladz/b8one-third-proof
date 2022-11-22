import { gql, useMutation } from "@apollo/client"
import { useEffect, useState } from "react"
import { signInData } from "../typings/typings"
import { useHistory } from "react-router-dom"

const SIGNIN = gql`
    mutation signIn($input: SignInInput!){
        signIn(input: $input) {
            token
            user {
            name
            email
            }
        }
    }
`

export const SignInPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [SignInPage, { data, loading, error }] = useMutation<signInData>(SIGNIN)

    const signIn = () => {
        SignInPage({ variables: { input: { email, password } } })
    }

    useEffect(() => {
        if (data) history.push("/dashboard")
        if (error) console.log("error")
    }, [data])

    const handleSubmit = (e: any) => {
        e.preventDefault()
        signIn();
    }

    return (
        <div className="container">

            <main>
                <div className="main-content">
                    <header className="header-content">
                        <h1 className="title-1">Academy</h1>
                        <h1 className="title-2">Store</h1>
                    </header>

                    <div className="login-content">
                        <div className="login-box">
                            <div className="login-container">
                                <div className="login-title">
                                    <p>Olá, entre com e-mail e senha.</p>
                                </div>
                                <form>
                                    <div className="login-input">
                                        <div className="email">
                                            <p className="email-title">
                                                Seu e-mail
                                            </p>
                                            <input type="email" placeholder="exemplo@gmail.com" className="email-input" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="senha">
                                            <p className="senha-title">
                                                Senha
                                            </p>
                                            <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} value={password} className="senha-input" />
                                        </div>
                                        <div className="mantenha-conectado">
                                            <input type="checkbox" className="checkbox-input" />
                                            <p className="checkbox-text">
                                                Manter conectado
                                            </p>
                                        </div>
                                        <div className="enter">
                                            <button onSubmit={handleSubmit} className="enter-button">Entrar</button>
                                        </div>
                                    </div>
                                </form>
                                <div>
                                    <p className="cadastro">
                                        Não possui conta? Cadastre-se!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

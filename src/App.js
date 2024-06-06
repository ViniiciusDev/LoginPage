import "./App.css";
import "./PaginaDeLogin.css";
import "./CampoDeDigitacao.css";
import ImageLogin from "./img/imagem-login.png";
import { useState } from "react";

function App() {
    // Componente Titulo
    function Titulo() {
        return <h1 className="form__titulo">Login</h1>;
    }
    // Componente Subtitulo
    function Subtitulo() {
        return <h3 className="form__texto">Boas-vindas! Faça seu login.</h3>;
    }
    // Componente Campo de Digitação
    function CampoDeDigitacao({ label, type, placeholder, value, setValue }) {
        return (
            <div className="form__campo-digitacao">
                <label for={type}>{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    required
                    id={type}
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
        );
    }
    // Componente Button
    function Botao() {
        return <button className="form__botao">Login</button>;
    }
    // Componente Pagina de Login
    function PaginaDeLogin() {
        // useState de Email e Senha
        const [email, setEmail] = useState("");
        const [senha, setSenha] = useState("");
        // Evento de handleSubmit aonde pega o valor e salva.
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log("Email " + email);
            console.log("Senha " + senha);
        };
        return (
            <div className="container-login">
                <img
                    src={ImageLogin}
                    alt="Garota Negra no computador com oculos e cabelo cacheado"
                />
                <section>
                    <form onSubmit={handleSubmit}>
                        <Titulo />
                        <Subtitulo />
                        <CampoDeDigitacao
                            label="Email ou Usuário"
                            type="email"
                            placeholder="Digite seu Email."
                            value={email}
                            setValue={setEmail}
                        />
                        <CampoDeDigitacao
                            label="Senha"
                            type="password"
                            placeholder="*****"
                            value={senha}
                            setValue={setSenha}
                        />
                        <Botao />
                    </form>
                </section>
            </div>
        );
    }

    return (
        <div className="App">
            <PaginaDeLogin />
        </div>
    );
}

export default App;

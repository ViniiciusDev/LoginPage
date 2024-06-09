import "./App.css";
import "./PaginaDeLogin.css";
import "./CampoDeDigitacao.css";
import ImageLogin from "./img/imagem-login.png";
import ImageGithub from "./img/Github.svg";
import ImageGoogle from "./img/Google.svg";
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
    // Componente Texto
    function Texto({ classe, children }) {
        return <p className={classe}>{children}</p>;
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
    // Componente Checkbox
    function Checkbox() {
        return (
            <>
                <div className="form__campo-checkbox">
                    <input type="checkbox" id="lembrar" />
                    <label for="lembrar"></label>
                </div>
                <p className="form__opcoes-texto">Lembrar-me</p>
            </>
        );
    }
    // Itens Redes Sociais
    function ItemRedeSociais({ link, nome, image }) {
        return (
            <li>
                <a href={link}>
                    <img src={image} alt={`Icone do ${nome}`} />
                    {nome}
                </a>
            </li>
        );
    }
    // Componente Link
    function Link({ children }) {
        return (
            <a href="index" className="container-links__link">
                {children}
            </a>
        );
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
                        <fieldset className="form__opcoes">
                            <Checkbox />
                            <p>
                                <a
                                    href="index"
                                    aria-label="Esqueciemento da senha"
                                >
                                    {" "}
                                    Esqueci a senha
                                </a>
                            </p>
                        </fieldset>
                        <Botao />
                    </form>
                    <div className="container-links">
                        <Texto classe="container-links__titulo">
                            ou entre com outras contas
                        </Texto>
                        <ul>
                            <ItemRedeSociais
                                link="https://www.github.com"
                                nome="Github"
                                image={ImageGithub}
                            />
                            <ItemRedeSociais
                                link="https://www.google.com"
                                nome="Google"
                                image={ImageGoogle}
                            />
                        </ul>
                        <Texto classe="container-links__texto">
                            Ainda não tem conta?
                        </Texto>
                        <Link>Crie seu Cadastro!</Link>
                    </div>
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

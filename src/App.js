import "./App.css";
import "./PaginaDeLogin.css";
import "./CampoDeDigitacao.css";
import ImageLogin from "./img/imagem-login.png";

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
    function CampoDeDigitacao({ label, type, placeholder }) {
        return (
            <div className="form__campo-digitacao">
                <label for="email">{label}</label>
                <input
                    type={type}
                    placeholder={placeholder}
                    required
                    id="email"
                />
            </div>
        );
    }
    // Componente Pagina de Login
    function PaginaDeLogin() {
        return (
            <div className="container-login">
                <img
                    src={ImageLogin}
                    alt="Garota Negra no computador com oculos e cabelo cacheado"
                />
                <section>
                    <Titulo />
                    <Subtitulo />
                    <CampoDeDigitacao
                        label="Email ou Usuário"
                        type="email"
                        placeholder="Digite seu Email."
                    />
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

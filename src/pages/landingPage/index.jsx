import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/index.jsx";
import Rodape from "../../components/rodape/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
    const navigate = useNavigate();

    function registerNavigate() {
        navigate("/cadastro");
    }

    return (
        <div className="main-div">
            <title>Classic Barber</title>
            <div className="sections">
                <Cabecalho />
                <section className="section-1">
                    <div>
                        {" "}
                        <img src="/assets/images/slice1.svg" />{" "}
                    </div>
                    <div className="second-part">
                        <a>
                            Encontre agora um <span>Barbeiro</span> disponível perto de você!
                        </a>
                        <button
                            onClick={registerNavigate}
                            to="/cadastro"
                            type="button"
                            class="btn btn-primary"
                        >
                            Registrar-se
                        </button>
                    </div>
                </section>
                <section className="section-2">
                    <div className="texts">
                        <h1 className="title">Quem Somos?</h1>
                        <h2 className="text">
                            Na <span> Classic Barber</span>, conectamos você aos melhores
                            barbeiros da sua região com rapidez e praticidade. Nossa
                            plataforma reúne profissionais qualificados para oferecer cortes e
                            barbas impecáveis, garantindo estilo e confiança. Encontre, agende
                            e transforme seu visual com poucos cliques!{" "}
                        </h2>
                    </div>
                    <div>
                        <img src="/assets/images/cut.svg" />
                    </div>
                </section>
                <section className="section-3">
                    <div className="contact"> <h1>Como você prefere falar conosco?</h1> </div>
                    <div className="contacts">
                    <div className="email">
                        <img src="/assets/images/envelope-regular.svg"/><a>classicbarbersuporte@outlook.com</a>
                    </div>
                    <img className="line" src="/assets/images/line.png"/>
                    <div className="phone">
                        <img src="/assets/images/phone-solid.svg"/><a>+55 (11) 97219-3396</a>
                    </div>  
                </div>
                </section>
                <Rodape/>
            </div>
        </div>
    );
}

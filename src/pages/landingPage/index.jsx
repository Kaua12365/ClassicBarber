import "./index.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/index.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
  const navigate = useNavigate();

  function registerNavigate() {
    navigate("/cadastro");
  }

  return (
    <div className="main-div">
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
      </div>
    </div>
  );
}

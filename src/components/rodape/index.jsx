
import './index.scss';
import { Link } from "react-router-dom";

export default function Rodape() {
    return (
        <div className="rodape">
            <div className="rodainfo1">
                <p>Classic Barber</p>
                <div className="imagens">
                    <img src="/assets/images/instagram.png" />
                    <img src="/assets/images/linkedin.png" />
                    <img src="/assets/images/whatsapp.png" />
                </div>

            </div>
            <div className="RiscoBranco"></div>
            <div className="meioRodape">

                <div className="esquerda">
                    <h1>Encontrar uma barbearia</h1>
                    <Link>Cadastre-se para novidades</Link>
                    <Link>Cortes</Link>
                    <Link>Mapa do site</Link>
                </div>
                <div className="meio">
                    <h1>Paginas</h1>
                    <Link to="/">Home</Link>
                    <Link to="/servicos">Serviços</Link>
                    <Link>Contatos</Link>
                    <Link>Sobre nós</Link>
                </div>

                <div className="direita">
                    <h1>Ajuda</h1>
                    <Link to="/">Reclame aqui</Link>
                    <Link to="/">Sustentabilidade</Link>
                </div>
            </div>
            <div className="reta">
                <div className="RiscoBranco2"></div>
            </div>
            <h1 id='fimRodape'>Classic Barber - CNPJ 00.000.000/0000-00 - CEP 00000-000. Av. Coronel Octaviano de Freitas Costa, 463 - Socorro, São Paulo</h1>
        </div>
    )
}
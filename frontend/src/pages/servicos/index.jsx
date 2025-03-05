import './index.scss';
import MenuLateral from "../../components/menuLateral"
import Card from '../../components/card';

export default function Servicos() {

    return (
        <div className="secao-servicos">
             <MenuLateral className="side-menu" /> 
            <div className="content">
                <div >
            <div className="texto">
                <h1>Nossos </h1> <h1 id='textoAzul'>Serviços</h1>
            </div>
            <h2>O Melhor Para Nossos Clientes</h2>

            <div className="cards">
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"} />
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"} />
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"} />
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"} />
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"} />
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"} />
            </div>
            </div>
            </div>
        </div>
    )
}
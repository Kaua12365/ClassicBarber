import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Rodape from '../../components/rodape';
import Card from '../../components/card';

export default function Servicos(){

    return(
        <div className="secao-servicos">
            <Cabecalho />

            <div className="texto">
                <h1>NOSSOS </h1> <h1 id='textoAzul'>SERVIÇOS</h1>
            </div>
            <h2>O MELHOR PARA NOSSOS CLIENTES</h2>

            <div className="cards">
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"}/>
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"}/>
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"}/>
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"}/>
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"}/>
                <Card imagem={"/assets/images/Razor Barber.png"} titulo={"Barba"}/>
            </div>
            <Rodape />
        </div>
    )
}
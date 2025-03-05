import './index.scss';
import MenuLateral from "../../components/menuLateral"
import Card from '../../components/card';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Servicos() {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('servicoEscolhido');
    }, []);

    function escolherServico(nomeServico) {
        localStorage.setItem('servicoEscolhido', nomeServico);
            
        setTimeout(() => {
            navigate('/agendamento');
        }, 100);
    }
    
    
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
                <Card imagem={"/assets/images/pracima.png"} titulo={"Corte de cabelo"} onClick={() => escolherServico("Corte de cabelo")} />
                <Card imagem={"/assets/images/barba.svg"} titulo={"Barba"} onClick={() => escolherServico("Barba")} />
                <Card imagem={"/assets/images/barbacabelo.svg"} titulo={"Corte de Cabelo + Barba"} onClick={() => escolherServico("Corte de Cabelo e Barba")}/> 
                <Card imagem={"/assets/images/Sombrancelha.svg"} titulo={"Sobrancelha"} onClick={() => escolherServico("Sobrancelha")}/>
                <Card imagem={"/assets/images/pigmentacao.svg"} titulo={"Pigmentação"} onClick={() => escolherServico("Pigmentaçãoo")}/>
                <Card imagem={"/assets/images/pacote.svg"} titulo={"Pacote Completo"} onClick={() => escolherServico("Pacote Completo")}/>    
            </div>
            </div>
            </div>
        </div>
    )
}
import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Tesoura from '../../components/tesoura';

export default function Cadastro() {
    return (
        <div className="secao-cadastro">
            <title>Classic Barber</title>
            <Cabecalho />
            <div className="cadastrar">
                <h1>Cadastro</h1>

                <div className="inputs">
                    <input type="text" placeholder='Insira seu nome.' />
                    <input type="text" placeholder='Insira sua telefone.' />
                    <input type="text" placeholder='Insira seu email.' />
                    <input type="text" placeholder='Insira sua senha.' />
                </div>

                <button>Cadastrar</button>
            </div>

            <Tesoura />
        </div>
    )
}
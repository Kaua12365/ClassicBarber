import { Link } from 'react-router-dom';
import './index.scss';
import Tesoura from '../../components/tesoura';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';

export default function Login() {
    return (
        <div className="Secao-Login">
            <Cabecalho />
            <div className="logar">
                <h1>Login</h1>
                <div className="inputs">
                    <input type="text" placeholder='Insira seu email.' />
                    <input type="text" placeholder='Insira sua senha.' />
                </div>

                <button>Confirmar</button>
                <Tesoura />
            </div>
        </div>
    )
}
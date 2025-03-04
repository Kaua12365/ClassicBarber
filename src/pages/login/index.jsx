import { Link } from 'react-router-dom';
import './index.scss';
import Tesoura from '../../components/tesoura';
import Rodape from '../../components/rodape';
import Cabecalho from '../../components/cabecalho';

export default function Login() {


    return (
        <div className="Secao-Login">
            <title>Classic Barber</title>
            <header className='cabecalho'>
                <div className="esquerda">
                    <Link to="/">
                        <img src="/assets/images/Mask group.png" alt="" />
                        <a to='/'>Classic Barber</a>
                    </Link>
                </div>

                <div className="direita">
                    <Link>Quem Somos</Link>
                    <Link>Suporte</Link>
                </div>
            </header>
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
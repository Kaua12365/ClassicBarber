import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
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
                    <Link to='/login'>Login</Link>
                </div>
        </header>
    )
}
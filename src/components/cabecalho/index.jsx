import './index.scss';
import { Link } from 'react-router-dom';

export default function Cabecalho() {
    return(
        <header className='cabecalho'>
                <div className="esquerda">
                    <img src="/assets/images/Mask group.png" alt="" />
                    <Link to='/'>Classic Barber</Link>
                </div>

                <div className="direita">
                    <Link>Quem Somos</Link>
                    <Link>Suporte</Link>
                    <Link to='/'>Login</Link>
                </div>
        </header>
    )
}
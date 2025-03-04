import './index.scss';
import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Cabecalho() {
    const navigate = useNavigate();

    function loginPage(){
        navigate("/login")
    }
    function landingPage(){
        navigate("/")
    }

    return(
        <header className='cabecalho'>
                <div className="esquerda">
                    <Link onClick={landingPage}>
                    <img src="/assets/images/Mask group.png" alt="" />
                    <a onClick={landingPage}>Classic Barber</a>
                    </Link>
                </div>

                <div className="direita">
                    <Link to="QuemSomos">Quem Somos</Link>
                    <Link to="Galeria">Galeria</Link>
                    <Link to="Suporte">Suporte</Link>
                    <Link onClick={loginPage}>Login</Link>
                </div>
        </header>
    )
}
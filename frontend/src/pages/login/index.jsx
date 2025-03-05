import { useNavigate, Link } from 'react-router-dom';
import './index.scss';
import Tesoura from '../../components/tesoura';
import { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const Navigate = useNavigate();


    async function Login() {
        const url = 'http://localhost:3002/login';
        let obj = {
            email: email,
            senha: senha
        }

        try {
            let resp = await axios.post(url, obj);
            localStorage.setItem('USUARIO', JSON.stringify(resp.data));
            Navigate("/home");

        } catch (error) {
            if (error.response && error.response.data) {
                let mensagemErro = error.response.data.erro;
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
        
    }

    return (
        <div className="Secao-Login">
                   <header className='cabecalho'>
                <div className="esquerda">
                    <Link to="/">
                    <img src="/assets/images/Mask group.png" alt="" />
                    <a to='/'>Classic Barber</a>
                    </Link>
                </div>

                <div className="direita">
                    <Link to='/cadastro'>Registrar-se</Link>
                </div>
        </header>

            <div className="logar">
                <h1>Login</h1>
                <div className="inputs">
                    <input type="text" placeholder='Insira seu email.' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder='Insira sua senha.' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button onClick={Login}>Confirmar</button>
                <Tesoura />
            </div>
            <Toaster />
        </div>
    )
}
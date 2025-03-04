import './index.scss';
import Cabecalho from '../../components/cabecalho'
import Tesoura from '../../components/tesoura';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    async function Cadastrar() {
        const url = 'http://localhost:3002/usuario';

        let obj = {
            nome: nome,
            telefone: telefone,
            email: email,
            senha: senha
        };

        try {
            let resp = await axios.post(url, obj);
            localStorage.setItem('USUARIO', JSON.stringify(resp.data));
            toast.success(`Cadastrado com sucesso! ID: ${resp.data.id}`);

        } catch (error) {
            if (error.response && error.response.data) {
                let mensagemErro = error.response.data.erro;
        
                if (mensagemErro.includes("Duplicate entry")) {
                    mensagemErro = "Este e-mail já está cadastrado.";
                }
        
                toast.error(mensagemErro);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (
        <div className="secao-cadastro">
            <title>Classic Barber</title>
                    <header className='cabecalho'>
                            <div className="esquerda">
                                <Link to="/">
                                <img src="/assets/images/Mask group.png" alt="" />
                                <a to="/">Classic Barber</a>
                                </Link>
                            </div>
            
                            <div className="direita">
                                <Link to="/login">Login</Link>
                            </div>
                    </header>
            <div className="cadastrar">
                <h1>Cadastro</h1>

                <div className="inputs">
                    <input type="text" placeholder='Insira seu nome.' value={nome} onChange={e => setNome(e.target.value)} />
                    <input type="text" placeholder='Insira sua telefone.' value={telefone} onChange={e => setTelefone(e.target.value)} />
                    <input type="text" placeholder='Insira seu email.' value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="text" placeholder='Insira sua senha.' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>

                <button onClick={Cadastrar}>Cadastrar</button>
            </div>

            <Tesoura />
            <Toaster />
        </div>
    )
}
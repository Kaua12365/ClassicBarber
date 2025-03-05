import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Rodape from './components/rodape';
import NaoEncontrado from './pages/naoEncontrado';
import Servicos from './pages/servicos';


export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} /> 
                <Route path='/rodape' element={<Rodape />} /> 
                <Route path='*' element={<NaoEncontrado />} />
                <Route path='/servicos' element={<Servicos />} />
            </Routes>
        </BrowserRouter>
    )
}
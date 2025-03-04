import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import LandingPage from './pages/landingPage';
import Rodape from './components/rodape';
import NaoEncontrado from './pages/naoEncontrado';
import Servicos from './pages/servicos';

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Cadastro />} /> 
                <Route path='/rodape' element={<Rodape />} /> 
                <Route path='*' element={<NaoEncontrado />} />
                <Route path='/' element={<LandingPage />} />
                <Route path='/servicos' element={<Servicos />} />
            </Routes>
        </BrowserRouter>
    )
}
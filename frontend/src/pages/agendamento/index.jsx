import MenuLateral from "../../components/menuLateral"
import './index.scss';
import Calendario from '../../components/calendario';
import CardHorario from '../../components/cardHorario';
import { useEffect, useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
import axios from 'axios';

export default function Agendamento() {
    const [horario, setHorario] = useState('');
    const [data, setData] = useState('');
    const [nomeServico, setNomeServico] = useState('');

    useEffect(() => {
        const servico = localStorage.getItem('servicoEscolhido');
        if (servico) setNomeServico(servico);
    }, []);

    async function confirmarAgendamento() { 
        if (!data) {
            toast.error('Por favor, selecione uma data.');
            return;
        }

        let dataFormatada = data;

        if (data instanceof Date) {
            dataFormatada = data.toISOString().split('T')[0];
        }

        try {
            let url = 'http://localhost:3002/agendar'
            let obj = {
                nome: nomeServico,
                horario,
                data: dataFormatada
            }
            let resp = await axios.post(url, obj);

            toast.success('Agendamento realizado com sucesso!');
        } catch (error) {
            if (error.response && error.response.data) {
                toast.error(error.response.data.error);
            } else {
                toast.error('Erro inesperado, tente novamente.');
            }
        }
    }

    return (
        <div className='secao-agendamento'>
            <div>
                <MenuLateral />
            </div>
            <div>
                <div className="content">
                    <Calendario onDateChange={setData} />

                    <div className="title">
                        <h1>Horários</h1>
                        <div className="borda"></div>
                    </div>

                    <div className="cards">
                        <CardHorario onHorarioChange={setHorario} />


                        <div className="botao">
                            <button onClick={confirmarAgendamento}>Confirmar agendamento</button>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />
        </div>

    );
}



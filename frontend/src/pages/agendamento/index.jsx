import MenuLateral from "../../components/menuLateral"
import './index.scss';
import Calendario from '../../components/calendario';
import CardHorario from '../../components/cardHorario';
import { Link } from "react-router-dom";
import Rodape from '../../components/rodape';

export default function Agendamento() {
    return (

        <div className='secao-agendamento'>
            <div>
                <MenuLateral />
            </div>
            <div>
                <div className="content">
                    <Calendario />

                    <div className="title">
                        <h1>Horários</h1>
                        <div className="borda"></div>
                    </div>

                    <div className="cards">
                        <CardHorario horario={"08:00"} />
                        <CardHorario horario={"08:30"} />
                        <CardHorario horario={"09:00"} />
                        <CardHorario horario={"10:00"} />
                        <CardHorario horario={"10:30"} />
                        <CardHorario horario={"11:00"} />
                        <CardHorario horario={"11:30"} />
                        <CardHorario horario={"12:00"} />
                        <CardHorario horario={"12:30"} />

                        <div className="botao">
                            <button>Confirmar agendamento</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}



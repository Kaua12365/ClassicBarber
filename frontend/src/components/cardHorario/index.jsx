import './index.scss';

export default function CardHorario({horario}) {
    return (
        <div className="cardHorario">
            <div className="cardzin">
                <h1>{horario}</h1>
            </div>
        </div>
    )
}
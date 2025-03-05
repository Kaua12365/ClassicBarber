import './index.scss';

export default function Card({ imagem, titulo, onClick }) {
    return (
        <div className="cardCorte" onClick={onClick}>
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
        </div>
    )
}
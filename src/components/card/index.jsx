import './index.scss';

export default function Card({ imagem, titulo }) {
    return (
        <div className="cardCorte">
            <img src={imagem} alt="" />
            <h1>{titulo}</h1>
        </div>
    )
}
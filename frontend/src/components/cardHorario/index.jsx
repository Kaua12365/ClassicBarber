import { useState } from 'react';
import './index.scss';

export default function CardHorario() {
  const [activeCard, setActiveCard] = useState(null);

  const horarios = [
    "08:00",
    "08:30",
    "09:00",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
  ];

  const handleClick = (id) => {
    setActiveCard(activeCard === id ? null : id); 
  };

  return (
    <div className='cardContainer'>
      {horarios.map((horario, index) => (
        <div className="cardHorario" key={index} onClick={() => handleClick(index)}>
          <div className={`cardzin ${activeCard === index ? 'clicked' : ''}`}>
            <h1>{horario}</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

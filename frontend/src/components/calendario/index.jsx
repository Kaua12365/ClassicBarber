import './index.scss';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendario({ onDateChange }) { 
    const [date, setDate] = useState(new Date());

    function aoMudarData(novaData) {
        setDate(novaData);
        onDateChange(novaData.toISOString().split('T')[0]); 
    }

    return (
        <div className="calendar-container">
            <Calendar
                onChange={aoMudarData} 
                value={date}
                locale="pt-BR"
                next2Label={null}
                prev2Label={null}
                formatShortWeekday={(locale, date) =>
                    ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][date.getDay()]
                }
                className="custom-calendar"
            />
        </div>
    );
}

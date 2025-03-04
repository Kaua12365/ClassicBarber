import './index.scss';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendario() {
    const [date, setDate] = useState(new Date());
    return (
        <div className="calendar-container">
            <Calendar
                onChange={setDate}
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
    )

}
import React from 'react'
import RevoCalendars from 'revo-calendar';
import { useState } from 'react';

export default function RevoCalendar() {
    const [date, setDate] = useState( new Date());

    const onChange = date =>{
        setDate(date);
    }

    var events = [
        {
            name: '',
            date: Date,
            todayColor: '#c0392b',
        },
        {
          name: "",
          date: Date,
        },  
        {
            name: "",
            date: Date,
            todayColor: '#c0392b',
        },
      ];
    return (
        <div>
            <RevoCalendars
            onChange={onChange}
            events={events}
            value={date}
            />
            {console.log(date)}
        </div>
    )
}

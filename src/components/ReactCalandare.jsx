import React, { useState } from 'react';
import Calendar from 'react-calendar';


export default function ReactCalandare() {
    var dates =  new Date();

    const [date, setDate] = useState(dates);

    const onChange = date => {
        setDate(date);
    }
    
    return (
        <div>
      <Calendar
        onChange={onChange}
        value={date}
        
      />
     
      {console.log(date)}
     
    </div>
    )
}

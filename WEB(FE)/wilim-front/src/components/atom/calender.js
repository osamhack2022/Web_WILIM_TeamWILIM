import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const Calender = () => {
    const [value, setValue] = useState(new Date());

    return (
        <Calendar onChange={setValue} value={value} />
    )
};
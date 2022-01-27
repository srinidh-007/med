import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarFunc = (props)=> {
  const [value, setDate] = useState(new Date());
  //console.log(new Date().getFullYear())
  const num_weeks = 2
  const numDaysCompleted = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365] // Feb contains 29 on leap year so should recompute

  const insideChildHandler = (e)=>{
    setDate(e)
    props.onChange(e)
  }

  let a = ['23122021','24122021']

  return (
    <div>
      <Calendar
        onChange={insideChildHandler}
        value={value}
        defaultView='month'
        minDate={new Date()}
        maxDate={new Date(Date.now()+num_weeks*6.048e+8- 6.048e+8/7)}
        tileDisabled={({date})=>{
          console.log(date)
          let temp = date.getDate().toString().concat((date.getMonth()+1).toString(), (date.getFullYear()).toString())
          console.log(temp)
          return ((a.includes(temp)))
        }}
      />
      
    </div>
  );
}

export default CalendarFunc;
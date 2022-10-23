import React from 'react';
import CalForm from '../components/calendar/CalForm';
import 'react-calendar/dist/Calendar.css';
  
const Calendar = () => {
  return (
    <div className="calendar-page"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
      }}
    >
      <CalForm />
    </div>
  );
}
export default Calendar;
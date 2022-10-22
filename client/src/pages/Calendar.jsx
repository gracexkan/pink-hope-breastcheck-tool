import React from 'react';
import CalTracker from '../components/CalTracker';
import CalForm from '../components/CalForm';
import 'react-calendar/dist/Calendar.css';
  
const Calendar = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '10px',
        marginTop: '20px',
        width: '100%'
      }}
    >
      <CalForm />
      <CalTracker />
    </div>
  );
}
export default Calendar;
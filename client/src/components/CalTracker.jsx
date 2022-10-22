import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const CalTracker = () => {
  const [value, onChange] = useState(new Date());
  const [list, setList] = useState([]);

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default CalTracker;
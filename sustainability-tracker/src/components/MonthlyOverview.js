import React, { useState } from 'react';
import './MonthlyOverview.css';

function MonthlyOverview({ onSelectDay }) {
  // Fallback if onSelectDay is not passed
  if (typeof onSelectDay !== 'function') {
    console.error('onSelectDay is not a function');
    onSelectDay = () => {};  // No-op fallback function
  }

  // Get the current date
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;  // getMonth() returns 0-11, so we add 1
  const currentYear = currentDate.getFullYear();  // Get the current year

  // Set the month and year using useState
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);

  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay() - 1;

  // Function to calculate the number of days in a month
  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();  // Ensure month is 0-indexed
  const days = Array.from({ length: firstDayOfMonth }, () => "").concat(
    Array.from({ length: daysInMonth(month, year) }, (_, i) => i + 1));

  console.log('Days in a month: ', daysInMonth);
  console.log('first day: ', firstDayOfMonth);
  
  // Format the month and year for display
  const formattedMonthYear = new Date(year, month - 1).toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="monthly-overview-container">
      <h2>{formattedMonthYear}</h2>
      <div className="calendar-grid">
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${day === currentDay && month === currentMonth && year === currentYear ? 'current-day' : ''}`}
            onClick={() => day && onSelectDay(day)}
          >
            {day || ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MonthlyOverview;

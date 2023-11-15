'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import events from './eventsInfo';


const daysOfWeek = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];


  
function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const lastDate = getDaysInMonth(currentMonth.getMonth(), currentMonth.getFullYear());

  let daysArray = [];

  const totalBoxes = firstDay + lastDate;
    const remainingBoxes = 7 - (totalBoxes % 7);

    // Add empty divs for days before the first day of the month
  for (let i = 0; i < firstDay; i++) {
    daysArray.push(<div key={`empty-start-${i}`} className=" h-[150px] w-[150px]"></div>);
  }

    for (let i = 1; i <= lastDate; i++) {
      const eventForDay = events.find(event => event.date === i && event.month === currentMonth.getMonth() && event.year === currentMonth.getFullYear());

        if (eventForDay) {
            daysArray.push(
                <div key={`day-${i}`} className=" bg-[#171717] h-[150px] w-[150px]  text-gray-400 flex justify-end items-center">
                    
                    <div className="event">
                    <a href={eventForDay.url} target="_blank">
                        <Image src={eventForDay.imagePath} width={150} height={150} alt="Event Image" />
                        {/* <div className="event-info">
                            {eventForDay.details}
                        </div> */}
                    </a>
                        
                    </div>
                </div>
            );
        } else {
            daysArray.push(<div key={`day-${i}`} className="day bg-[#171717] h-[150px] w-[150px] p-2 text-gray-400 flex justify-end">{i}</div>);
        }
    }
    

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  }

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  }

  return (
    <div>
        {/* for large devices */}
        <div className=" lg:grid hidden gap-3 p-5 ">
          <div className=" col-span-7 flex justify-between items-center mt-14  mb-10">
              <button className=' text-4xl' onClick={handlePrevMonth}>&lt;</button>
              <h2 className=' text-[#E36230] text-4xl font-medium'>{currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}</h2>
              <button className=' text-4xl' onClick={handleNextMonth}>&gt;</button>
          </div>
          {daysOfWeek.map(day => (
              <div key={day} className=" flex items-center justify-center font-medium">{day}</div>
          ))}

          {daysArray}
          </div>
    </div>
    
  );
}

export default Calendar;

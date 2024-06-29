import React from 'react';
import Head from 'next/head';
import MemoryItem from './MemoryItem';
import styles from '../styles/memories.module.css';

interface Memory {
  date: string;
  imageUrl: string;
}

interface MonthData {
  month: string;
  memories: Memory[];
}

const Memories: React.FC = () => {
  const memoriesData: MonthData[] = [
    {
      month: 'May 2024',
      memories: [
      ],
    },
    {
      month: 'June 2024',
      memories: [
        { date: '2024-06-25', imageUrl: 'deskStretch.jpg' },
        { date: '2024-06-26', imageUrl: 'starjump.jpg' },
        { date: '2024-06-27', imageUrl: 'headstretch.jpg' },
        { date: '2024-06-28', imageUrl: 'blinkeyes.jpg' },
        { date: '2024-06-29', imageUrl: 'pushup.jpg' },
      ],
    },
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const renderMemoryItems = (memories: Memory[], year: number, month: number) => {
    const date = new Date(year, month, 1);
    const firstDay = date.getDay(); // Get the first day of the month
    const totalDays = new Date(year, month + 1, 0).getDate(); // Get total days in the month

    const memoryItems = [];

    // Add blank spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      memoryItems.push(<MemoryItem key={`blank-start-${i}`} imageUrl="" date="" isBlank />);
    }

    // Add memory items
    for (let i = 1; i <= totalDays; i++) {
      const memory = memories.find(mem => parseInt(mem.date.split('-')[2], 10) === i);
      memoryItems.push(
        memory ? (
          <MemoryItem key={i} imageUrl={memory.imageUrl} date={memory.date} dayNumber={i} />
        ) : (
          <MemoryItem key={i} imageUrl="" date="" isBlank dayNumber={i} />
        )
      );
    }

    const remainingSlots = 42 - memoryItems.length; // Ensure a grid of 6 rows
    for (let i = 0; i < remainingSlots; i++) {
      memoryItems.push(<MemoryItem key={`blank-end-${i}`} imageUrl="" date="" isBlank />);
    }

    return memoryItems;
  };

  return (
    <>
      <div className={styles.memoriesPage}>
        <h1 className=" fixed text-4xl font-bold text-white mb-8 justify-center ml-[200px] mb-[195%]">Memories</h1>
        {memoriesData.map((monthData, index) => {
          const [monthName, year] = monthData.month.split(' ');
          const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
          return (
            <div key={index} className="month-section mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">{monthData.month}</h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map((day, idx) => (
                  <div key={idx} className="text-center text-white font-bold">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {renderMemoryItems(monthData.memories, parseInt(year, 10), monthIndex)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Memories;

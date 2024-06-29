import React from "react";
import Head from "next/head";
import MemoryItem from "./MemoryItem";
import styles from "../styles/memories.module.css";

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
      month: "May 2024",
      memories: [
        { date: "2024-05-01", imageUrl: "kjew/kj1.jpg" },
        { date: "2024-05-04", imageUrl: "kjew/kj2.jpg" },
        { date: "2024-05-5", imageUrl: "kjew/kj3.jpg" },
        { date: "2024-05-7", imageUrl: "kjew/kj4.jpg" },
        { date: "2024-05-11", imageUrl: "kjew/kj5.jpg" },
        { date: "2024-05-12", imageUrl: "kjew/kj6.jpg" },
        { date: "2024-05-17", imageUrl: "kjew/kj7.jpg" },
        { date: "2024-05-18", imageUrl: "kjew/kj8.jpg" },
        { date: "2024-05-21", imageUrl: "kjew/kj9.jpg" },
        { date: "2024-05-22", imageUrl: "kjew/kj10.jpg" },
        { date: "2024-05-24", imageUrl: "kjew/kj11.jpg" },
        { date: "2024-05-29", imageUrl: "kjew/kj12.jpg" },
      ],
    },
    {
      month: "June 2024",
      memories: [
        { date: "2024-06-02", imageUrl: "kjew/15.jpg" },
        { date: "2024-06-07", imageUrl: "kjew/14.jpg" },
        { date: "2024-06-15", imageUrl: "kjew/13.jpg" },
        { date: "2024-06-12", imageUrl: "jerry.jpg" },
        { date: "2024-06-10", imageUrl: "squat.jpg" },
        { date: "2024-06-09", imageUrl: "plank.jpg" },
        { date: "2024-06-21", imageUrl: "abs.jpg" },
        { date: "2024-06-22", imageUrl: "oneleg.jpg" },
        { date: "2024-06-08", imageUrl: "onehand.jpg" },
        { date: "2024-06-018", imageUrl: "posture.jpg" },
        { date: "2024-06-25", imageUrl: "deskStretch.jpg" },
        { date: "2024-06-01", imageUrl: "starjump.jpg" },
        { date: "2024-06-27", imageUrl: "headstretch.jpg" },
        { date: "2024-06-28", imageUrl: "blinkeyes.jpg" },
        { date: "2024-06-04", imageUrl: "pushup.jpg" },
      ],
    },
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const renderMemoryItems = (
    memories: Memory[],
    year: number,
    month: number
  ) => {
    const date = new Date(year, month, 1);
    const firstDay = date.getDay(); // Get the first day of the month
    const totalDays = new Date(year, month + 1, 0).getDate(); // Get total days in the month

    const memoryItems = [];

    // Add blank spaces for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      memoryItems.push(
        <MemoryItem key={`blank-start-${i}`} imageUrl="" date="" isBlank />
      );
    }

    // Add memory items
    for (let i = 1; i <= totalDays; i++) {
      const memory = memories.find(
        (mem) => parseInt(mem.date.split("-")[2], 10) === i
      );
      memoryItems.push(
        memory ? (
          <MemoryItem
            key={i}
            imageUrl={memory.imageUrl}
            date={memory.date}
            dayNumber={i}
          />
        ) : (
          <MemoryItem key={i} imageUrl="" date="" isBlank dayNumber={i} />
        )
      );
    }

    const remainingSlots = 42 - memoryItems.length; // Ensure a grid of 6 rows
    for (let i = 0; i < remainingSlots; i++) {
      memoryItems.push(
        <MemoryItem key={`blank-end-${i}`} imageUrl="" date="" isBlank />
      );
    }

    return memoryItems;
  };

  return (
    <>
      <div className={styles.memoriesPage}>
        <h1 className=" fixed text-4xl font-bold text-white mb-8 justify-center ml-[200px] mb-[195%]">
          Memories
        </h1>
        {memoriesData.map((monthData, index) => {
          const [monthName, year] = monthData.month.split(" ");
          const monthIndex = new Date(`${monthName} 1, ${year}`).getMonth();
          return (
            <div key={index} className="month-section mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                {monthData.month}
              </h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {daysOfWeek.map((day, idx) => (
                  <div key={idx} className="text-center text-white font-bold">
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {renderMemoryItems(
                  monthData.memories,
                  parseInt(year, 10),
                  monthIndex
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Memories;

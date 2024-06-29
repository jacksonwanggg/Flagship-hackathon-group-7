import React from 'react';
import styles from '../styles/memories.module.css';

interface MemoryItemProps {
  imageUrl: string;
  date: string;
  isBlank?: boolean;
  dayNumber?: number;
}

const MemoryItem: React.FC<MemoryItemProps> = ({ imageUrl, date, isBlank = false, dayNumber }) => {
  const backgroundStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className={`memory-item ${isBlank ? 'blank' : ''}`}>
      {dayNumber !== undefined && (
        <div className={styles.dayNumberWrapper}>
          <div className={styles.dayNumber} style={backgroundStyle}>
            {dayNumber}
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryItem;

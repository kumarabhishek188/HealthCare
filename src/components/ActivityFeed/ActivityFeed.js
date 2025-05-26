// src/components/ActivityFeed/ActivityFeed.js
import React from 'react';
import styles from './ActivityFeed.module.css';

const days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
const sampleHeights = [30,50,40,60,35,55,45];

// Pick a distinct color per day:
const colors = [
  'var(--primary-blue)',
  'var(--green)',
  'var(--orange)',
  'var(--light-blue)',
  'var(--primary-blue)',
  'var(--green)',
  'var(--orange)'
];

export default function ActivityFeed() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Activity</h3>
        <span className={styles.subtitle}>3 appointments this week</span>
      </div>
      <div className={styles.chart}>
        {days.map((d, i) => (
          <div key={d} className={styles.barWrapper}>
            <div
              className={styles.bar}
              style={{
                height: `${sampleHeights[i]}px`,
                backgroundColor: colors[i]
              }}
            />
            <div className={styles.label}>{d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

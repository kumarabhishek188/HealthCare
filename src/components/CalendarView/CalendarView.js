// src/components/CalendarView/CalendarView.js
import React from 'react';
import {
  FaTooth,        // dentist icon
  FaWheelchair    // physiotherapy icon
} from 'react-icons/fa';
import {
  calendarMonth,
  calendarDays,
  calendarAppointments
} from '../../data/calendarData';
import styles from './CalendarView.module.css';

// map appointment titles to icons and colors
const iconMap = {
  Dentist: {
    Icon: FaTooth,
    color: 'var(--primary-blue)'
  },
  'Physiotherapy Appointment': {
    Icon: FaWheelchair,
    color: 'var(--green)'
  }
};

export default function CalendarView() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>{calendarMonth}</h3>
        <div className={styles.nav}>
          <button>&larr;</button>
          <button>&rarr;</button>
        </div>
      </div>

      <div className={styles.grid}>
        {calendarDays.map(day => (
          <div key={day.date} className={styles.dayCell}>
            <div className={styles.dayLabel}>{day.day}</div>
            <div className={styles.date}>{day.date}</div>
            <div className={styles.times}>
              {day.times.map(t => (
                <span key={t} className={styles.time}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.appointments}>
        {calendarAppointments.map(app => {
          const mapEntry = iconMap[app.title] || {};
          const { Icon, color } = mapEntry;
          return (
            <div key={app.id} className={styles.appCard}>
              {Icon && (
                <Icon size={20} style={{ color, marginRight: '8px' }} />
              )}
              <div className={styles.appInfo}>
                <div className={styles.appTitle}>{app.title}</div>
                <div className={styles.appTime}>{app.time}</div>
                <div className={styles.appDoctor}>{app.doctor}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

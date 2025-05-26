// src/components/SimpleAppointmentCard/SimpleAppointmentCard.js
import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

export default function SimpleAppointmentCard({ title, time, Icon, iconColor }) {
  return (
    <div className={styles.card}>
      {Icon && <Icon size={16} style={{ color: iconColor, marginRight: '8px' }} />}
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
}

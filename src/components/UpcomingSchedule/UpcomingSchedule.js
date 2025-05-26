// src/components/UpcomingSchedule/UpcomingSchedule.js
import React from 'react';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcoming } from '../../data/upcoming';
import { FaHeartbeat, FaEye, FaStethoscope, FaBrain } from 'react-icons/fa';
import styles from './UpcomingSchedule.module.css';

const iconMap = {
  'Health checkup complete': { icon: FaHeartbeat, color: 'red' },
  Ophthalmologist:               { icon: FaEye,       color: 'blue' },
  Cardiologist:                 { icon: FaStethoscope, color: 'green' },
  Neurologist:                  { icon: FaBrain,     color: 'purple' }
};

export default function UpcomingSchedule() {
  return (
    <div className={styles.container}>
      <h3>The Upcoming Schedule</h3>
      {upcoming.map(group => (
        <div key={group.id} className={styles.group}>
          <h4 className={styles.dayHeading}>{group.day}</h4>
          {group.items.map(item => {
            const entry = iconMap[item.title] || {};
            return (
              <SimpleAppointmentCard
                key={item.id}
                title={item.title}
                time={item.time}
                Icon={entry.icon}
                iconColor={entry.color}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

// src/components/HealthStatusCards/HealthStatusCards.js
import React from 'react';
import { statusCards } from '../../data/healthStatus';
import { FaLungs, FaTooth, FaBone } from 'react-icons/fa';
import styles from './HealthStatusCards.module.css';

const iconMap = {
  Lungs: FaLungs,
  Teeth: FaTooth,
  Bone: FaBone,
};

export default function HealthStatusCards() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {statusCards.map(card => {
          const Icon = iconMap[card.title];
          return (
            <div key={card.id} className={styles.card}>
              <div className={styles.header}>
                {Icon && <Icon size={20} className={styles.icon} />}
                <div>
                  <div className={styles.title}>{card.title}</div>
                  <div className={styles.date}>{card.date}</div>
                </div>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progress}
                  style={{
                    width: `${card.progress}%`,
                    backgroundColor: card.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      {/* Single Details link after all cards */}
      <div className={styles.detailsLink}>Details →</div>
    </div>
  );
}

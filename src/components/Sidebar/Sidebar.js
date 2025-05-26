// src/components/Sidebar/Sidebar.js
import React from 'react';
import { navLinks } from '../../data/navigation';
import {
  Home,
  Clock,
  Calendar,
  CalendarCheck,
  BarChart2,
  MessageCircle,
  HelpCircle,
  Settings
} from 'lucide-react';
import styles from './Sidebar.module.css';

// Map link names to Lucide icon components
const iconMap = {
  Dashboard: Home,
  History: Clock,
  Calendar: Calendar,
  Appointments: CalendarCheck,
  Statistics: BarChart2,
  Chat: MessageCircle,
  Support: HelpCircle
};

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        {/* <h1 className={styles.logo}>Healthcare.</h1> */}
        <h1 className={styles.logo}>
        <span className={styles.health}>Health</span>
        <span className={styles.care}>Care.</span>
        </h1>
        {navLinks.map(section => (
          <div key={section.section || 'tools'} className={styles.section}>
            {section.section && (
              <h2 className={styles.heading}>{section.section}</h2>
            )}
            <ul>
              {section.links
                // filter out the singular "Setting" link
                .filter(link => link !== 'Setting')
                .map(link => {
                  const Icon = iconMap[link];
                  return (
                    <li key={link} className={styles.linkItem}>
                      {Icon && <Icon size={16} className={styles.linkIcon} />}
                      <span>{link}</span>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Settings button with label */}
      <button className={styles.settingsBtn}>
        <Settings size={16} className={styles.linkIcon} />
        <span>Settings</span>
      </button>
    </aside>
  );
}

import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.searchBar}>
        <Search size={18} />
        <input type="text" placeholder="Search" disabled />
      </div>
      <div className={styles.actions}>
        <Bell size={20} className={styles.icon} />
        <div className={styles.avatar}>AK</div>
        <button className={styles.addBtn}><Plus size={16} /></button>
      </div>
    </header>
  );
}
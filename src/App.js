// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AnatomySection from './components/AnatomySection/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards/HealthStatusCards';
import CalendarView from './components/CalendarView/CalendarView';
import ActivityFeed from './components/ActivityFeed/ActivityFeed';
import UpcomingSchedule from './components/UpcomingSchedule/UpcomingSchedule';
import { ChevronDown } from 'lucide-react';  // ← add this
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainArea}>
        <Header />
        <div className={styles.content}>

          {/* LEFT COLUMN */}
          <div className={styles.leftColumn}>

            {/* Updated header row */}
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>DASHBOARD</h2>
              <button className={styles.sectionSubtitle}>
                This Week
                <ChevronDown size={16} className={styles.chevron} />
              </button>
            </div>

            <div className={styles.overview}>
              <AnatomySection />
              <HealthStatusCards />
            </div>

            <ActivityFeed />
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightColumn}>
            <CalendarView />
            <UpcomingSchedule />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

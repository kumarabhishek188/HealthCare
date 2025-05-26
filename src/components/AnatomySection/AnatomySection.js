import React, { useState } from 'react';
import { anatomyItems } from '../../data/healthStatus';
import { ZoomIn, ZoomOut } from 'lucide-react';
import styles from './AnatomySection.module.css';

export default function AnatomySection() {
  const [zoom, setZoom] = useState(1);
  const [selectedPart, setSelectedPart] = useState(null);

  // Zoom handlers
  const zoomIn = () => setZoom(z => Math.min(z + 0.2, 2));
  const zoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));

  if (selectedPart) {
    // ... your existing detail view logic ...
    return (
      <div className={styles.detailContainer}>
        <button className={styles.backBtn} onClick={() => setSelectedPart(null)}>
          ← Back
        </button>
        <img src={selectedPart.icon} alt={selectedPart.key} className={styles.detailImage} />
        <div className={styles.detailLabel}>{selectedPart.label}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        {/* Zoom controls */}
        <div className={styles.zoomControls}>
          <button onClick={zoomIn} className={styles.zoomBtn}><ZoomIn size={16} /></button>
          <button onClick={zoomOut} className={styles.zoomBtn}><ZoomOut size={16} /></button>
        </div>

        <img
          src="/assets/anatomy.png"
          alt="Anatomy Illustration"
          className={styles.image}
          style={{ transform: `scale(${zoom})` }}
        />

        {anatomyItems.map(item => (
          <button
            key={item.id}
            className={styles.badge}
            style={{ top: item.y, left: item.x, background: item.color }}
            onClick={() => setSelectedPart(item)}
          >
            {item.key}
          </button>
        ))}
      </div>
    </div>
  );
}

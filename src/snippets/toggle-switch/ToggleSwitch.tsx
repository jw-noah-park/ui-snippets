import { useState } from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  label?: string;
  descriptionOn?: string;
  descriptionOff?: string;
}

export default function ToggleSwitch({
  label = 'Toggle option',
  descriptionOn = 'This option is enabled',
  descriptionOff = 'This option is disabled',
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Header: label + switch */}
        <div className={styles.cardHeader}>
          <p className={styles.title}>{label}</p>

          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
              aria-label={label}
            />
            <span className={styles.track} />
            <span className={styles.knob} />
          </label>
        </div>

        {/* Status row */}
        <div className={styles.statusRow}>
          <p className={styles.statusLabel}>Status:</p>
          <p className={`${styles.statusValue} ${checked ? styles.on : styles.off}`}>
            {checked ? 'ON' : 'OFF'}
          </p>
        </div>

        {/* Description */}
        <p className={`${styles.description} ${checked ? styles.on : styles.off}`}>
          {checked ? descriptionOn : descriptionOff}
        </p>
      </div>
    </div>
  );
}

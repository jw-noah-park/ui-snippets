import styles from './FloatingActionButton.module.css';
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function FloatingActionButton() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <input
          type="checkbox"
          className={styles.checkbox}
          aria-label="Toggle actions"
        />
        <div className={styles.fab} aria-hidden="true" />
        <div className={styles.fac}>
          <a href="#">
            <FiHome />
          </a>
          <a href="#">
            <FiUser />
          </a>
          <a href="#">
            <FiSettings />
          </a>
          <a href="#">
            <FiLogOut />
          </a>
        </div>
      </div>
    </div>
  );
}

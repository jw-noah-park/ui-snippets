import styles from './FloatingButton.module.css';

export default function FloatingButton() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>Module Css</button>
          <button className={styles.button}>Primary</button>
          <button className={styles.button}>Secondary</button>
        </div>
      </div>
    </div>
  );
}

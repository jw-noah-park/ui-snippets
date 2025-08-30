import styles from './FireText.module.css';

export default function FireText() {
  return (
    <div className={styles.wrapper}>
      <span className={`${styles.demoText} ${styles.fire} `}>
        FEEL THE HEAT
      </span>
    </div>
  );
}

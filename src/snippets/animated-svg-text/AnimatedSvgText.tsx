import styles from './AnimatedSvgText.module.css';

export default function AnimatedSvgText() {
  return (
    <div className={styles.wrapper}>
      <svg viewBox="0 0 600 300" className={styles.svg}>
        <symbol id="m-text">
          <text textAnchor="middle" x="50%" y="50%" dominantBaseline="middle">
            Module.CSS
          </text>
        </symbol>
        <use xlinkHref="#m-text" className={styles.text} />
        <use xlinkHref="#m-text" className={styles.text} />
        <use xlinkHref="#m-text" className={styles.text} />
        <use xlinkHref="#m-text" className={styles.text} />
        <use xlinkHref="#m-text" className={styles.text} />
      </svg>
    </div>
  );
}

import styles from './TypingText.module.css';

export default function TypingText() {
  const text = 'More UI tricks coming soon.';
  const count = text.length;

  return (
    <div className={styles.wrapper}>
      <p
        className={styles.typing}
        style={{
          width: `${count}ch`,
          animation: `typing 2.6s steps(${count}), blink .5s step-end infinite alternate`,
        }}
      >
        {text}
      </p>
    </div>
  );
}

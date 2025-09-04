import { useRef } from 'react';
import styles from './BubbleButton.module.css';

interface BubblyButtonProps {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function BubblyButton({
  children = 'SAVE',
  onClick,
  className = '',
}: BubblyButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick?.(event);
    const element = ref.current;
    if (!element) return;

    element.classList.remove(styles.animate);
    void element.offsetWidth;
    element.classList.add(styles.animate);
  };

  return (
    <div className={styles.wrapper}>
      <button
        ref={ref}
        type="button"
        className={`${styles.bubblyButton} ${className}`}
        onClick={handleClick}
        onAnimationEnd={() => ref.current?.classList.remove(styles.animate)}
      >
        {children}
      </button>
    </div>
  );
}

import { useEffect, useRef, useState } from 'react';
import styles from './ActionMenu.module.css';
import {
  FiMoreHorizontal,
  FiEdit,
  FiEyeOff,
  FiShare2,
  FiBookmark,
  FiMessageCircle,
  FiCopy,
  FiTrash2,
} from 'react-icons/fi';

type Item = {
  key: string;
  label: string;
  icon: React.ReactNode;
  destructive?: boolean;
};

export default function ActionMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  const items: Item[] = [
    { key: 'edit', label: 'Edit Post', icon: <FiEdit /> },
    { key: 'hide', label: 'Hide Post', icon: <FiEyeOff /> },
    { key: 'share', label: 'Share Post', icon: <FiShare2 /> },
    { key: 'divider', label: '', icon: <span /> },
    { key: 'pin', label: 'Pin to top', icon: <FiBookmark /> },
    { key: 'disable', label: 'Disable Comments', icon: <FiMessageCircle /> },
    { key: 'dup', label: 'Duplicate', icon: <FiCopy /> },
    { key: 'divider', label: '', icon: <span /> },
    { key: 'del', label: 'Delete', icon: <FiTrash2 />, destructive: true },
  ];

  return (
    <div className={styles.wrap}>
      <div className={styles.anchor} ref={ref}>
        <button
          className={styles.trigger}
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={open}
        >
          <FiMoreHorizontal />
        </button>

        {open && (
          <div className={styles.paper} role="menu">
            <ul className={styles.list}>
              {items.map((it) =>
                it.key.startsWith('divider') ? (
                  <li key={it.key} className={styles.sep} />
                ) : (
                  <li key={it.key}>
                    <button
                      className={`${styles.item} ${it.destructive ? styles.itemDanger : ''}`}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.icon}>{it.icon}</span>
                      <span className={styles.label}>{it.label}</span>
                    </button>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

import { useRef, useState } from 'react';
import styles from './SearchBar.module.css';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function SearchBar() {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={() => setFocused(true)}
        className={focused ? styles.inputActive : ''}
        onBlur={(e) => {
          if (!e.target.value) setFocused(false);
        }}
      />
      <button
        className={styles.search}
        onClick={() =>
          focused ? inputRef.current?.blur() : inputRef.current?.focus()
        }
      >
        {focused ? <FaTimes /> : <FaSearch />}
      </button>
    </div>
  );
}

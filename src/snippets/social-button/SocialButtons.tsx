import styles from './SocialButtons.module.css';

type Site = {
  name: 'facebook' | 'instagram' | 'youtube' | 'x';
  iconClass: string;
};

const SITES: Site[] = [
  { name: 'facebook', iconClass: 'fa-brands fa-facebook-f' },
  { name: 'youtube', iconClass: 'fa-brands fa-youtube' },
  { name: 'x', iconClass: 'fa-brands fa-x-twitter' },
  { name: 'instagram', iconClass: 'fa-brands fa-instagram' },
];

// Font Awesome → add this link once in your global <head> (e.g. public/index.html / index.html / _document.tsx).
// Then delete the inline <link> below.
export default function SocialButtons() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <div className={styles.socialBtns}>
        {SITES.map(({ name, iconClass }) => (
          <a key={name} href="#" className={`${styles.btn} ${styles[name]}`}>
            <i className={iconClass} aria-hidden="true" />
            <span className="sr-only">{name}</span>
          </a>
        ))}
      </div>
    </>
  );
}

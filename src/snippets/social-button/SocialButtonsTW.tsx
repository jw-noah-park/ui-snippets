import type { CSSProperties } from 'react';

type CSSVarStyle = CSSProperties & { '--a'?: string; '--f'?: string };

export default function SocialButtonsTW() {
  const sites = [
    { name: 'facebook', icon: 'fa-brands fa-facebook-f', color: '#1877f2' },
    { name: 'youtube', icon: 'fa-brands fa-youtube', color: '#ff0000' },
    { name: 'x', icon: 'fa-brands fa-x-twitter', color: '#111111' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', color: '#e4405f' },
  ] as const;

  const SOCIAL_BUTTON =
    'group isolate relative grid place-items-center size-[90px] rounded-[25%] overflow-hidden ' +
    'shadow-[0_5px_15px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300 hover:-translate-y-0.5 ' +
    "before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:size-[140%] " +
    'before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-0 before:rounded-full ' +
    'before:[background:var(--f,var(--a))] before:transition-transform before:duration-[450ms] ' +
    'before:ease-[cubic-bezier(0.31,-0.105,0.43,1.59)] before:z-0 before:pointer-events-none ' +
    'hover:before:scale-100 hover:before:opacity-100';

  const ICON =
    'relative z-10 text-[38px] scale-90 transition-all duration-300 ' +
    'ease-[cubic-bezier(0.31,-0.105,0.43,1.59)] text-[var(--a)] ' +
    'group-hover:text-white group-hover:scale-105';

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />
      <div className="flex min-h-screen items-center justify-center gap-4">
        {sites.map((s) => {
          const style: CSSVarStyle =
            s.name === 'instagram'
              ? {
                  '--a': s.color,
                  '--f':
                    'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',
                }
              : { '--a': s.color };
          return (
            <a key={s.name} href="#" className={SOCIAL_BUTTON} style={style}>
              <i className={`${s.icon} ${ICON}`} />
            </a>
          );
        })}
      </div>
    </>
  );
}

// Font Awesome → add this link once in your global <head> (e.g. public/index.html / index.html / _document.tsx).
// Then delete the inline <link> below.

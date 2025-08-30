export default function FireTextTW() {
  return (
    <>
      <style>{`
        @keyframes redFireFlicker {
          0%, 100% {
            text-shadow:
              0 0 6px #ff3333,
              0 -2px 12px #ff4d4d,
              0 -4px 16px #ff6600,
              0 -6px 22px #ff9900,
              0 -8px 28px #ffcc00,
              0 -10px 34px #ffff66;
          }
          50% {
            text-shadow:
              0 0 10px #ff4d4d,
              -1px -3px 14px #ff1a1a,
              1px -5px 20px #ff751a,
              -1px -7px 26px #ffb84d,
              1px -9px 32px #ffee66,
              0 -12px 40px #ffffff;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion\\:animate-none { animation: none !important; }
        }
      `}</style>

      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <span
          className={[
            'leading-none font-extrabold tracking-wide',
            'text-[clamp(2rem,6vw,2.5rem)]',
            'text-[#ff1a1a]',
            '[text-shadow:0_0_6px_#ff3333,0_-2px_12px_#ff4d4d,0_-4px_16px_#ff6600,0_-6px_22px_#ff9900,0_-8px_28px_#ffcc00,0_-10px_34px_#ffff66]',
            'motion-safe:animate-[redFireFlicker_0.25s_ease-in-out_infinite]',
            'reduce-motion:animate-none',
          ].join(' ')}
        >
          IGNITE THE FIRE
        </span>
      </div>
    </>
  );
}

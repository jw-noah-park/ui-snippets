export default function PixelTextTW() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <div className="grid min-h-screen place-items-center bg-slate-50 text-center">
        <span
          className="inline-block text-[clamp(1.5rem,6vw,2.2rem)] font-black tracking-wider text-amber-400"
          style={{
            fontFamily:
              '"Press Start 2P", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
            textShadow: `
              2px 0 0 #dc2626,
              -2px 0 0 #dc2626,
              0 2px 0 #dc2626,
              0 -2px 0 #dc2626,
              4px 4px 0 #258eb5,
              8px 8px 0 #1e3a8a
            `,
          }}
        >
          PRESS START
        </span>
      </div>
    </>
  );
}

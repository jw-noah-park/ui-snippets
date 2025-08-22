// SIZE TUNING GUIDE (edit numbers only; keep structure/classes as-is)
// 1) Decide NEW_VH (target letter height in vh). Compute: scale = NEW_VH / 5
// 2) Change these four places by the same scale:
//    - [font-size:5vh]            -> [font-size:NEW_VHvh]
//    - stroke-[1.5]               -> stroke-[ 1.5 * scale ]
//    - [stroke-dasharray:35_165]  -> [stroke-dasharray: (35*scale)_(165*scale) ]
//    - @keyframes stroke (below)  -> dashoffset: -200 * scale
// Example: NEW_VH = 8  => scale=1.6
//    [font-size:8vh], stroke-[2.4], [stroke-dasharray:56_264], dashoffset:-320

export default function AnimatedSvgTextTW() {
  /* Palette + delays (keep or swap colors as you like) */
  const layers = [
    { color: '#ff3b3b', delay: '-1.2s' },
    { color: '#00f0ff', delay: '-2.4s' },
    { color: '#f7b801', delay: '-3.6s' },
    { color: '#00e676', delay: '-4.8s' },
    { color: '#9b5de5', delay: '-6s' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111] uppercase font-extrabold">
      <style>{`
        @keyframes stroke {
          to {
            stroke-dashoffset: -200;
          }
      `}</style>

      <svg viewBox="0 0 600 300" className="w-full h-auto">
        <symbol id="tw-text">
          <text textAnchor="middle" x="50%" y="50%" dominantBaseline="middle">
            Tailwind
          </text>
        </symbol>
        {layers.map(({ color, delay }) => (
          <use
            key={color}
            href="#tw-text"
            className="fill-none stroke-[1.5] stroke-join-round
              [stroke-dasharray:35_165] [stroke-dashoffset:0]
              [font-size:5vh]
              animate-[stroke_6s_linear_infinite]
              motion-reduce:animate-none"
            style={{ stroke: color, animationDelay: delay }}
          />
        ))}
      </svg>
    </div>
  );
}

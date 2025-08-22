//   To resize, change ONLY SIZE_VH. Everything else scales proportionally.
//    - fontSize         = SIZE_VH vh
//    - strokeWidth      = 1.5 * (SIZE_VH / 5)
//    - dasharray        = 35 * (SIZE_VH / 5) , 165 * (SIZE_VH / 5)
//    - dashoffset (end) = -200 * (SIZE_VH / 5)
import { Box, keyframes } from '@mui/material';

export default function AnimatedSvgTextMUI() {
  const SIZE_VH = 5; // change this (e.g., 4, 6, 8 ...)
  const SCALE = SIZE_VH / 5; // base scale relative to 5vh
  const strokeKF = keyframes`
  to { stroke-dashoffset: -200; }
`;
  /* Palette + delays (keep or swap colors as you like) */
  const layers = [
    { color: '#ff4d6d', delay: '-1.2s' },
    { color: '#00c2ff', delay: '-2.4s' },
    { color: '#f9f871', delay: '-3.6s' },
    { color: '#2ee6d6', delay: '-4.8s' },
    { color: '#a78bfa', delay: '-6s' },
  ];
  return (
    <Box
      component="svg"
      viewBox="0 0 600 300"
      sx={{ width: '100%', height: 'auto', display: 'block', bgcolor: '#111' }}
    >
      <Box component="symbol" id="mui-text">
        <Box
          component="text"
          textAnchor="middle"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          sx={{ fontFamily: 'initial', textTransform: 'uppercase', fontWeight: 'bold' }}
        >
          Material UI
        </Box>
      </Box>
      {layers.map(({ color, delay }) => (
        <Box
          key={color}
          component="use"
          href="#mui-text"
          sx={{
            fontSize: `${SIZE_VH}vh`,
            fill: 'none',
            strokeWidth: 1.5 * SCALE,
            strokeLinejoin: 'round',
            strokeLinecap: 'round',
            strokeDasharray: `${35 * SCALE} ${165 * SCALE}`,
            strokeDashoffset: 0,
            animation: `${strokeKF} 6s linear infinite`,
          }}
          style={{ stroke: color, animationDelay: delay }}
        />
      ))}
    </Box>
  );
}

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { keyframes } from '@mui/system';

const fireFlicker = keyframes({
  '0%,100%': {
    textShadow: `
      0 0 6px #00bfff,
      0 -2px 12px #1e90ff,
      0 -4px 18px #3399ff,
      0 -6px 24px #66ccff,
      0 -8px 30px #99e6ff,
      0 -10px 36px #ffffff
    `,
  },
  '50%': {
    textShadow: `
      0 0 10px #1e90ff,
      -1px -3px 14px #00bfff,
      1px -5px 20px #3399ff,
      -1px -7px 26px #66ccff,
      1px -9px 32px #99e6ff,
      0 -12px 40px #ffffff
    `,
  },
});

export default function FireTextMUI() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f8fafc',
      }}
    >
      <Box
        component="span"
        sx={{
          color: '#1e90ff',
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: '0.05em',
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          textShadow: `
            0 0 6px #00bfff,
            0 -2px 12px #1e90ff,
            0 -4px 18px #3399ff,
            0 -6px 24px #66ccff,
            0 -8px 30px #99e6ff,
            0 -10px 36px #ffffff
          `,
          animation: reduceMotion
            ? 'none'
            : `${fireFlicker} 0.25s ease-in-out infinite`,
        }}
      >
        BURNING BRIGHT
      </Box>
    </Box>
  );
}

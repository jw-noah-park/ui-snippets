import { Box, styled } from '@mui/material';

const Typing = styled('p')<{ count: number }>(({ count }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: '3px solid #111827',
  fontFamily: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace',
  fontSize: '1.5rem',
  display: 'inline-block',
  width: `${count}ch`,
  animation: `
    ${`typing 2.6s steps(${count}), blink .5s step-end infinite alternate`}
  `,
  '@keyframes typing': { from: { width: 0 } },
  '@keyframes blink': { '50%': { borderColor: 'transparent' } },
}));

export default function TypingTextMUI() {
  const text = 'Subscribe for more UI tips!';
  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center', bgcolor: 'grey.100' }}>
      <Typing count={text.length}>{text}</Typing>
    </Box>
  );
}

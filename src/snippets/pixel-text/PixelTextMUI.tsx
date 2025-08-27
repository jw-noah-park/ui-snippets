import { Box, styled } from '@mui/material';

const Container = styled(Box)({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  background: '#f8fafc',
});

const Pixel = styled('span')({
  display: 'inline-block',
  fontFamily:
    '"Press Start 2P", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontWeight: 900,
  letterSpacing: '0.06em',
  fontSize: 'clamp(1.5rem, 6vw, 2.5rem)',
  color: '#e72222',
  textShadow: `
    2px 0 0 #e72222,
    -2px 0 0 #e72222,
    0 2px 0 #e72222,
    0 -2px 0 #e72222,
    4px 4px 0 #c82988,
    8px 8px 0 #c82988,
    12px 12px 0 #c82988
  `,
});

export default function PixelTextMUI() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Pixel>GAME OVER</Pixel>
      </Container>
    </>
  );
}

import * as React from 'react';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/material/styles';

type Props = {
  children?: React.ReactNode;
  colorMain?: string;
  colorDark?: string;
  colorText?: string;
  durationMs?: number;
};

const topBubbles = keyframes`
  0%{
    background-position:
      5% 90%,
      10% 90%,
      10% 90%,
      15% 90%,
      25% 90%,
      25% 90%,
      40% 90%,
      55% 90%,
      70% 90%;
  }
  50%{
    background-position:
      0% 80%,
      0% 20%,
      10% 40%,
      20% 0%,
      30% 30%,
      22% 50%,
      50% 50%,
      65% 20%,
      90% 30%;
  }
  100%{
    background-position:
      0% 70%,
      0% 10%,
      10% 30%,
      20% -10%,
      30% 20%,
      22% 40%,
      50% 40%,
      65% 10%,
      90% 20%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
`;

const bottomBubbles = keyframes`
  0%{
    background-position:
      10% -10%,
      30% 10%,
      55% -10%,
      70% -10%,
      85% -10%,
      70% -10%,
      70% 0%;
  }
  50%{
    background-position:
      0% 80%,
      20% 80%,
      45% 60%,
      60% 100%,
      75% 70%,
      95% 60%,
      105% 0%;
  }
  100%{
    background-position:
      0% 90%,
      20% 90%,
      45% 70%,
      60% 110%,
      75% 80%,
      95% 70%,
      110% 10%;
    background-size:
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%,
      0% 0%;
  }
`;

const Btn = styled('button')<{
  colorMain: string;
  colorDark: string;
  colorText: string;
  durationMs: number;
}>(({ colorMain, colorDark, colorText, durationMs }) => ({
  position: 'relative',
  zIndex: 0,
  padding: '1em 2em',
  border: 0,
  borderRadius: 6,
  cursor: 'pointer',
  transition: 'transform .1s ease-in, box-shadow .25s ease-in',
  color: colorText,
  background: colorMain,
  boxShadow: `0 2px 25px ${colorMain}55`,
  '&:focus': { outline: 'none' },
  '&:active': {
    transform: 'scale(.95)',
    background: colorDark,
    boxShadow: `0 2px 25px ${colorDark}55`,
  },

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    left: '-20%',
    width: '140%',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    display: 'none',
    zIndex: -1,
  },

  '&.animate::before': {
    display: 'block',
    top: '-75%',
    backgroundImage: `
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, ${colorMain} 20%, transparent 30%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${colorMain} 15%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%)
    `,
    backgroundSize: `
      10% 10%,
      20% 20%,
      15% 15%,
      20% 20%,
      18% 18%,
      10% 10%,
      15% 15%,
      10% 10%,
      18% 18%
    `,
    animation: `${topBubbles} ${durationMs}ms ease-in-out forwards`,
  },

  '&.animate::after': {
    display: 'block',
    bottom: '-75%',
    backgroundImage: `
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, ${colorMain} 15%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%),
      radial-gradient(circle, ${colorMain} 20%, transparent 20%)
    `,
    backgroundSize: `
      15% 15%,
      20% 20%,
      18% 18%,
      20% 20%,
      15% 15%,
      10% 10%,
      20% 20%
    `,
    animation: `${bottomBubbles} ${durationMs}ms ease-in-out forwards`,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '&.animate::before, &.animate::after': {
      animation: 'none',
      display: 'none',
    },
  },
}));

export default function BubbleButtonMUI({
  children = 'CANCEL',
  colorMain = '#ff8fab',
  colorDark = '#fb6f92',
  colorText = '#ffe5ec',
  durationMs = 750,
}: Props) {
  const ref = React.useRef<HTMLButtonElement>(null);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    const element = ref.current;
    if (!element) return;
    element.classList.remove('animate');
    void element.offsetWidth;
    element.classList.add('animate');
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <Btn
        ref={ref}
        type="button"
        colorMain={colorMain}
        colorDark={colorDark}
        colorText={colorText}
        durationMs={durationMs}
        onClick={handleClick}
        onAnimationEnd={() => ref.current?.classList.remove('animate')}
      >
        {children}
      </Btn>
    </div>
  );
}

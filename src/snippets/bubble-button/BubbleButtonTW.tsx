import { useRef } from 'react';

type BubbleTheme = {
  btn: string;
  btnDark: string;
  text: string;
  durMs: number;
};

type Props = {
  children?: React.ReactNode;
  theme?: Partial<BubbleTheme>;
};

export default function BubbleButtonTW({
  children = 'SUBMIT',
  theme = {},
}: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const resolvedTheme: BubbleTheme = {
    btn: theme.btn ?? '#cce3de',
    btnDark: theme.btnDark ?? '#a4c3b2',
    text: theme.text ?? '#f6fff8',
    durMs: theme.durMs ?? 750,
  };

  const styleVars: React.CSSProperties = {
    ['--btn' as string]: resolvedTheme.btn,
    ['--btnDark' as string]: resolvedTheme.btnDark,
    ['--text' as string]: resolvedTheme.text,
    ['--dur' as string]: `${resolvedTheme.durMs}ms`,
  };

  const handleClick = () => {
    const buttonElement = buttonRef.current;
    if (!buttonElement) return;
    buttonElement.classList.remove('animate');
    void buttonElement.offsetWidth;
    buttonElement.classList.add('animate');
  };

  return (
    <div className="grid min-h-screen place-items-center">
      <button
        ref={buttonRef}
        onClick={handleClick}
        onAnimationEnd={() => buttonRef.current?.classList.remove('animate')}
        style={styleVars}
        className="tw-bubbly relative z-0 rounded-md border-0 bg-[color:var(--btn)] px-8 py-4 text-[color:var(--text)] transition-transform duration-100 ease-in active:scale-95"
      >
        {children}
      </button>

      <style>{`
        .tw-bubbly::before,
        .tw-bubbly::after {
          content:'';
          position:absolute;
          left:-20%;
          width:140%;
          height:100%;
          background-repeat:no-repeat;
          display:none;
          z-index:-1;
        }

        .tw-bubbly.animate::before {
          display:block;
          top:-75%;
          background-image:
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, transparent 20%, var(--btn) 20%, transparent 30%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, var(--btn) 15%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%);
          background-size:
            10% 10%,
            20% 20%,
            15% 15%,
            20% 20%,
            18% 18%,
            10% 10%,
            15% 15%,
            10% 10%,
            18% 18%;
          animation: twTopBubbles var(--dur) ease-in-out forwards;
        }

        
        .tw-bubbly.animate::after {
          display:block;
          bottom:-75%;
          background-image:
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, transparent 10%, var(--btn) 15%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%),
            radial-gradient(circle, var(--btn) 20%, transparent 20%);
          background-size:
            15% 15%,
            20% 20%,
            18% 18%,
            20% 20%,
            15% 15%,
            10% 10%,
            20% 20%;
          animation: twBottomBubbles var(--dur) ease-in-out forwards;
        }

        @keyframes twTopBubbles {
          0% {
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
          50% {
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
          100% {
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
        }

        @keyframes twBottomBubbles {
          0% {
            background-position:
              10% -10%,
              30% 10%,
              55% -10%,
              70% -10%,
              85% -10%,
              70% -10%,
              70% 0%;
          }
          50% {
            background-position:
              0% 80%,
              20% 80%,
              45% 60%,
              60% 100%,
              75% 70%,
              95% 60%,
              105% 0%;
          }
          100% {
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
        }

        .tw-bubbly:active {
          background: var(--btnDark);
        }
      `}</style>
    </div>
  );
}

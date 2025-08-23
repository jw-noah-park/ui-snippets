export default function TypingTextTW() {
  const text = 'Like & Share if this helped!';
  const count = text.length;

  return (
    <div className="min-h-screen grid place-items-center bg-gray-100">
      <p
        className="font-mono text-2xl whitespace-nowrap overflow-hidden border-r-2 border-gray-900 typing-anim"
        style={{
          width: `${count}ch`,
          animation: `typing 2.6s steps(${count}), blink .5s step-end infinite alternate`,
        }}
      >
        {text}
      </p>

      <style>{`
        @keyframes typing { from { width: 0 } }
        @keyframes blink { 50% { border-color: transparent } }
        @media (prefers-reduced-motion: reduce) {
          p { animation: none !important; border-right: 0 !important; }
        }
      `}</style>
    </div>
  );
}

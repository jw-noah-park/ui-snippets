type Plan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$9 / mo',
    description: 'Essential features to get started. Perfect for individuals.',
    features: ['✔ 5 Projects', '✔ Basic Support', '✔ Community Access'],
  },
  {
    name: 'Standard',
    price: '$19 / mo',
    description:
      'Advanced tools and priority support. Great for professionals.',
    features: [
      '✔ Unlimited Projects',
      '✔ Priority Support',
      '✔ Team Access',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$29 / mo',
    description: 'All features unlocked. Best for teams and businesses.',
    features: [
      '✔ Everything in Pro',
      '✔ Dedicated Manager',
      '✔ Custom Reports',
    ],
  },
];

const SILVER_PALETTE = {
  background: '#1b1d20',
  textColor: '#f3f4f6',
  ringDark: '#3b3f46',
  ringMid: '#b7bec8',
  ringLight: '#f1f2f3',
  buttonBg: '#b7bec8',
  buttonHoverBg: '#f1f2f3',
  chipBackground: '#f1f2f3',
  chipTextColor: '#1b1d20',
};

const palette = SILVER_PALETTE;

function createCardBackground(
  ringDark: string,
  ringMid: string,
  ringLight: string,
  background: string,
) {
  const conic = `conic-gradient(
    from var(--gradient-angle),
    ${ringDark} 0%,
    ${ringMid} 22%,
    ${ringLight} 25%,
    ${ringMid} 28%,
    ${ringDark} 35%,
    ${ringDark} 55%,
    ${ringMid} 72%,
    ${ringLight} 75%,
    ${ringMid} 78%,
    ${ringDark} 90%
  )`;
  return `linear-gradient(${ringDark}, ${background}), ${conic}`;
}

export default function SubscriptionCardsTW() {
  return (
    <main
      className="grid min-h-[100svh] place-items-center p-6"
      style={{ backgroundColor: palette.background, color: palette.textColor }}
    >
      <style>{`
        @property --gradient-angle { syntax: "<angle>"; initial-value: 0turn; inherits: false; }
        @keyframes gradient-angle { to { --gradient-angle: 1turn; } }
      `}</style>

      <div className="mx-auto grid grid-flow-row justify-center gap-y-4 md:grid-flow-col md:gap-x-10">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={[
              'relative grid place-items-center gap-3',
              'max-w-[240px] rounded-[20px] p-6',
              'border-2 border-transparent',
              '[background-clip:padding-box,border-box]',
              '[background-origin:padding-box,border-box]',
              'transition-transform duration-300 ease-linear',
              'hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_24px_rgba(0,0,0,0.4)]',
              'ring-1 ring-white/10',
              plan.popular ? 'shadow-[0_0_22px_rgba(241,242,243,0.18)]' : '',
            ].join(' ')}
            style={{
              backgroundImage: createCardBackground(
                palette.ringDark,
                palette.ringMid,
                palette.ringLight,
                palette.background,
              ),
              animation: 'gradient-angle 2s linear infinite',
              willChange: 'background-image',
            }}
          >
            {plan.popular && (
              <span
                className="absolute -top-3 -right-3 rounded-lg px-2 py-1 text-[10px] font-bold"
                style={{
                  background: palette.chipBackground,
                  color: palette.chipTextColor,
                  zIndex: 2,
                }}
              >
                Most Popular
              </span>
            )}

            <h2 className="font-['Comfortaa',sans-serif] text-[20px] font-bold">
              {plan.name}
            </h2>

            <p className="m-0 text-[18px] font-semibold">{plan.price}</p>

            <p className="mb-2 text-center text-[12px]">{plan.description}</p>

            <ul className="m-0 grid w-full list-none gap-1 p-0 text-[12px]">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <button
              className="mt-1 rounded-lg px-4 py-2 text-[13px] font-bold transition"
              style={{
                background: palette.buttonBg,
                color: palette.chipTextColor,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = palette.buttonHoverBg)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = palette.buttonBg)
              }
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

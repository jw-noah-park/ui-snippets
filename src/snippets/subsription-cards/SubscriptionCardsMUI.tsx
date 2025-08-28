import * as React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  useMediaQuery,
} from '@mui/material';
import { keyframes } from '@mui/system';

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

const rotate = keyframes`
  to { --gradient-angle: 1turn; }
`;

const BG_DARK = '#1a1a1a';
const TEXT_COLOR = '#f3f4f6';
const EMERALD_DARK = '#064e3b';
const EMERALD = '#10b981';
const PLATINUM = '#e5e4e2';

function GradientCard({
  children,
  popular,
  reduceMotion,
}: React.PropsWithChildren<{ popular?: boolean; reduceMotion: boolean }>) {
  return (
    <Card
      sx={{
        position: 'relative',
        border: '2px solid transparent',
        overflow: 'visible',
        borderRadius: '20px',
        backgroundImage: `
     linear-gradient(${EMERALD_DARK}, ${BG_DARK}),
          conic-gradient(
            from var(--gradient-angle),
            ${EMERALD_DARK} 0%,
            ${EMERALD} 37%,
            ${PLATINUM} 30%,
            ${EMERALD} 33%,
            ${EMERALD_DARK} 40%,
            ${EMERALD_DARK} 50%,
            ${EMERALD} 77%,
            ${PLATINUM} 80%,
            ${EMERALD} 83%,
            ${EMERALD_DARK} 90%
          )
        `,
        backgroundClip: 'padding-box, border-box',
        backgroundOrigin: 'padding-box, border-box',
        animation: reduceMotion ? 'none' : `${rotate} 2s linear infinite`,
        color: TEXT_COLOR,
        display: 'grid',
        placeItems: 'center',
        rowGap: '12px',
        maxWidth: 240,
        p: '24px 20px',
        textDecoration: 'none',
        transition: 'transform .3s ease, box-shadow .3s ease',
        '&:hover': {
          transform: 'translateY(-6px) scale(1.02)',
          boxShadow: '0 12px 24px rgba(0,0,0,.4)',
        },
        ...(popular && {
          borderColor: PLATINUM,
          boxShadow: '0 0 20px rgba(249, 222, 144, .3)',
        }),
      }}
    >
      {children}
    </Card>
  );
}

export default function SubscriptionCardsMUI() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  return (
    <>
      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0turn;
          inherits: false;
        }
      `}</style>

      <Box
        component="main"
        sx={{
          backgroundColor: BG_DARK,
          minHeight: '100vh',
          display: 'grid',
          alignContent: { xs: 'start', md: 'center' },
          justifyContent: 'center',
          p: '24px',
          gap: '40px',
          gridAutoFlow: { xs: 'row', md: 'column' },
        }}
      >
        {plans.map((plan) => (
          <GradientCard
            key={plan.name}
            popular={plan.popular}
            reduceMotion={!!reduceMotion}
          >
            {plan.popular && (
              <Chip
                label="Most Popular"
                size="small"
                sx={{
                  position: 'absolute',
                  top: -12,
                  right: -12,
                  background: PLATINUM,
                  color: BG_DARK,
                  fontSize: 10,
                  fontWeight: 'bold',
                  px: 1,
                  borderRadius: '8px',
                }}
              />
            )}

            <CardContent
              sx={{
                display: 'grid',
                placeItems: 'center',
                rowGap: '12px',
                p: 0,
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Comfortaa", sans-serif',
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {plan.name}
              </Typography>

              <Typography sx={{ fontSize: 18, fontWeight: 600, m: '4px 0' }}>
                {plan.price}
              </Typography>

              <Typography sx={{ fontSize: 12, textAlign: 'center', mb: '8px' }}>
                {plan.description}
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  display: 'grid',
                  gap: '4px',
                  fontSize: 12,
                  width: '100%',
                }}
              >
                {plan.features.map((f) => (
                  <Box key={f} component="li">
                    {f}
                  </Box>
                ))}
              </Box>

              <Button
                sx={{
                  background: EMERALD,
                  color: BG_DARK,
                  fontSize: 13,
                  fontWeight: 'bold',
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  textTransform: 'none',
                  '&:hover': { background: PLATINUM },
                }}
              >
                Choose Plan
              </Button>
            </CardContent>
          </GradientCard>
        ))}
      </Box>
    </>
  );
}

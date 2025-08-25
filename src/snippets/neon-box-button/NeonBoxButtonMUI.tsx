import { Box, Button, styled } from '@mui/material';

export default function NeonBoxButtonMUI() {
  const NeonButton = styled(Button)(({ theme }) => ({
    padding: '12px 24px',
    fontWeight: 'bold',
    fontSize: '16px',
    border: `2px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    background: 'transparent',
    borderRadius: '8px',
    transition: 'all 0.4s ease',
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      boxShadow: `0 0 20px ${theme.palette.primary.main}, 0 0 40px ${theme.palette.primary.main}`,
    },
    '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
  }));
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#111',
      }}
    >
      <NeonButton>Material UI</NeonButton>
    </Box>
  );
}

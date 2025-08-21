import { Box, Button, type SxProps } from '@mui/material';

export default function FloatingButtonMui() {
  const floatingButtonStyle: SxProps = {
    backgroundColor: 'transparent',
    color: '#5d8aa8',
    border: '2px solid currentColor',
    px: '1em',
    py: '0.5em',
    fontSize: '1rem',
    borderRadius: '5rem',
    ml: '0.5rem',
    transition: 'color .15s, border-color .15s, box-shadow .15s, transform .15s',
    textTransform: 'none',
    '&:hover': {
      borderColor: '#ffbf00',
      color: '#ffbf00',
      boxShadow: '0 0.5em 0.5em -0.4em #ffbf00',
      transform: 'translateY(-0.25em)',
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        bgcolor: '#f3f4f6',
      }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: 2,
          p: 2,
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        }}
      >
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
          <Button disableRipple sx={floatingButtonStyle}>
            MUI
          </Button>
          <Button disableRipple sx={floatingButtonStyle}>
            Primary
          </Button>
          <Button disableRipple sx={floatingButtonStyle}>
            Secondary
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

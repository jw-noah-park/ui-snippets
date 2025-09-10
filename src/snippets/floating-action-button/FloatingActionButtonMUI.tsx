import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { FiHome, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function FloatingActionButtonMUI() {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        bgcolor: '#f4f6f8',
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      }}
    >
      <Box sx={{ position: 'relative', width: 56, height: 56, mt: 12 }}>
        <Box
          role="menu"
          aria-label="Fab actions"
          sx={{
            position: 'absolute',
            top: '50%',
            left: open ? '-240px' : '-240px',
            transform: 'translateY(-50%)',
            width: 220,
            height: 48,
            bgcolor: '#fff',
            borderRadius: '999px',
            boxShadow: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            px: 1,
            opacity: open ? 1 : 0,
            pointerEvents: open ? 'auto' : 'none',
            transition: 'opacity .25s ease',
          }}
        >
          <IconButton aria-label="Home" size="medium" sx={{ color: '#2c3e50' }}>
            <FiHome />
          </IconButton>
          <IconButton
            aria-label="Profile"
            size="medium"
            sx={{ color: '#2c3e50' }}
          >
            <FiUser />
          </IconButton>
          <IconButton
            aria-label="Settings"
            size="medium"
            sx={{ color: '#2c3e50' }}
          >
            <FiSettings />
          </IconButton>
          <IconButton
            aria-label="Logout"
            size="medium"
            sx={{ color: '#2c3e50' }}
          >
            <FiLogOut />
          </IconButton>
        </Box>

        <IconButton
          aria-label="Toggle actions"
          onClick={() => setOpen((v) => !v)}
          sx={{
            position: 'relative',
            zIndex: 2,
            width: 56,
            height: 56,
            bgcolor: '#59b673',
            borderRadius: '50%',
            boxShadow: 3,
            '&:hover': { bgcolor: '#59b673' },
            '&::before, &::after': {
              content: '""',
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: 26,
              height: 4,
              bgcolor: '#fff',
              borderRadius: '2px',
              transform: 'translate(-50%, -50%)',
              transition: 'transform .25s ease',
            },
            '&::before': {
              transform: open
                ? 'translate(-50%, -50%) rotate(45deg)'
                : 'translate(-50%, -50%) rotate(0deg)',
            },
            '&::after': {
              transform: open
                ? 'translate(-50%, -50%) rotate(-45deg)'
                : 'translate(-50%, -50%) rotate(90deg)',
            },
          }}
        />
      </Box>
    </Box>
  );
}

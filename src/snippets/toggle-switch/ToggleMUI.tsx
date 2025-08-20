import { Box, Paper, Switch, Typography } from '@mui/material';
import { useState } from 'react';

interface ToggleSwitchProps {
  label?: string; // Label displayed at the top of the card
  descriptionOn?: string; // Description shown when switch is ON
  descriptionOff?: string; // Description shown when switch is OFF
}

export default function ToggleSwitchMUI({
  label = 'Toggle option',
  descriptionOn = 'This option is enable.',
  descriptionOff = 'This option is disabled.',
}: ToggleSwitchProps) {
  const [checked, setChecked] = useState(false);

  return (
    // Page background and centering
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'grey.100',
      }}
    >
      {/* Card container */}
      <Paper elevation={3} sx={{ minWidth: 320, p: 2, borderRadius: 3 }}>
        {/* Header section: label + toggle switch */}
        <Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              mb: 1,
              borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography>{label}</Typography>
            <Switch
              sx={{ mr: -2 }}
              color="success"
              checked={checked}
              onChange={(event) => setChecked(event.target.checked)}
            />
          </Box>

          {/* Status row */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
            <Typography variant="body2" color="text.secondary">
              Status:
            </Typography>
            <Typography variant="body2" color={checked ? 'success.main' : 'text.secondary'}>
              {checked ? 'ON' : 'OFF'}
            </Typography>
          </Box>
          {/* Description text */}
          <Typography variant="body2" color={checked ? 'success.main' : 'text.secondary'}>
            {checked ? descriptionOn : descriptionOff}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

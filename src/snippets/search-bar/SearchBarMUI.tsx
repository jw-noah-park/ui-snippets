import * as React from 'react';
import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const CONTAINER_WIDTH = 300;
const CONTAINER_HEIGHT = 100;
const INPUT_SIZE = 50;
const EXPANDED_WIDTH = 300;
const INPUT_PADDING_X = 20;
const INPUT_PADDING_RIGHT_FOR_ICON = 80;
const TRANSITION_MS = 1000;

const INPUT_BOX_SHADOW =
  '0 0 25px 0 rgba(28, 58, 154, 0.4), 0 20px 25px 0 rgba(75, 70, 198, 0.4)';
const ICON_BOX_SHADOW = '0 0 25px 0 rgba(75, 70, 198, 0.4)';

export default function SearchBarMUI() {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputElementRef = React.useRef<HTMLInputElement>(null);

  const handleInputFocus = () => setIsFocused(true);

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) setIsFocused(false);
  };

  const handleIconButtonClick = () => {
    const inputElement = inputElementRef.current;
    if (isFocused) {
      setIsFocused(false);
      inputElement?.blur();
    } else {
      inputElement?.focus();
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      }}
    >
      <InputBase
        inputRef={inputElementRef}
        placeholder="Search..."
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        sx={{
          position: 'absolute',
          inset: 0,
          m: 'auto',
          width: INPUT_SIZE,
          height: INPUT_SIZE,
          px: `${INPUT_PADDING_X}px`,
          pr: `${INPUT_PADDING_RIGHT_FOR_ICON}px`,
          borderRadius: '30px',
          outline: 'none',
          border: 'none',
          boxShadow: INPUT_BOX_SHADOW,
          transition: `all ${TRANSITION_MS}ms`,
          opacity: 0,
          zIndex: 5,
          fontFamily: '"Inconsolata", monospace',
          fontWeight: 700,
          letterSpacing: '0.1em',
          '& input': {
            p: 0,
            color: 'black',
            '::placeholder': { color: 'black', opacity: 0.5, fontWeight: 700 },
          },
          ...(isFocused && {
            width: EXPANDED_WIDTH,
            opacity: 1,
            cursor: 'text',
          }),
          ...(!isFocused && { cursor: 'pointer' }),
        }}
      />

      <IconButton
        aria-label={isFocused ? 'Close search' : 'Open search'}
        onClick={handleIconButtonClick}
        sx={{
          position: 'absolute',
          inset: 0,
          m: 'auto',
          width: INPUT_SIZE,
          height: INPUT_SIZE,
          borderRadius: '50%',
          transition: `all ${TRANSITION_MS}ms`,
          zIndex: 4,
          boxShadow: ICON_BOX_SHADOW,
          fontSize: '1.2rem',
          color: 'black',
          ...(isFocused && {
            right: -(EXPANDED_WIDTH - INPUT_SIZE),
            zIndex: 6,
          }),
        }}
      >
        {isFocused ? (
          <CloseIcon fontSize="inherit" />
        ) : (
          <SearchIcon fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
}

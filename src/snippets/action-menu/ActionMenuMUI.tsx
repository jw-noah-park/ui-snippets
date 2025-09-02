import * as React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  ListItemIcon,
  Typography,
  Divider,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const DropdownItem = ({
  icon,
  label,
  disabled,
  destructive,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
  destructive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <MenuItem
      disabled={disabled}
      onClick={onClick}
      sx={{
        px: 1.25,
        py: 1.1,
        mx: 0.25,
        borderRadius: 2,
        color: destructive ? 'error.main' : 'text.disabled',
        '& .MuiListItemIcon-root': {
          color: destructive ? 'error.main' : 'text.disabled',
        },

        '&:hover': !destructive
          ? {
              backgroundColor: 'rgba(0,0,0,0.04)',
              color: 'text.primary',
              '& .MuiListItemIcon-root': { color: 'text.primary' },
            }
          : {
              backgroundColor: 'rgba(254, 226, 226, 0.5)',
              color: 'error.light',
              '& .MuiListItemIcon-root': { color: 'error.light' },
            },
      }}
    >
      <ListItemIcon sx={{ minWidth: 32 }}>{icon}</ListItemIcon>
      <Typography
        variant="body2"
        sx={{
          letterSpacing: 0.1,
        }}
      >
        {label}
      </Typography>
    </MenuItem>
  );
};

export default function ActionMenuMUI() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ minHeight: '100vh', display: 'grid', placeItems: 'center' }}>
      <IconButton
        onClick={handleOpen}
        aria-haspopup="menu"
        aria-expanded={open || undefined}
        sx={{
          borderRadius: 2,
          border: '2px solid #BEBFC5',
          boxShadow: '0 6px 18px rgba(99,102,241,0.15)',
        }}
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
            p: 1,
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.86))',
            backdropFilter: 'blur(16px) saturate(140%)',
            WebkitBackdropFilter: 'blur(16px) saturate(140%)',
            border: '1px solid rgba(221, 225, 238, 0.8)',
            boxShadow:
              '0 20px 50px rgba(17,24,39,0.10), inset 0 1px 0 rgba(255,255,255,0.7)',
            minWidth: 260,
          },
        }}
      >
        <MenuList dense sx={{ py: 0.5 }}>
          <DropdownItem icon={<EditNoteOutlinedIcon />} label="Edit Post" />
          <DropdownItem
            icon={<VisibilityOffOutlinedIcon />}
            label="Hide Post"
          />
          <DropdownItem icon={<ShareOutlinedIcon />} label="Share Post" />

          <Divider sx={{ my: 0.75, borderColor: 'rgba(226,232,240,0.9)' }} />

          <DropdownItem icon={<PushPinOutlinedIcon />} label="Pin to top" />
          <DropdownItem
            icon={<ChatBubbleOutlineOutlinedIcon />}
            label="Disable Comments"
          />
          <DropdownItem icon={<ContentCopyOutlinedIcon />} label="Duplicate" />

          <Divider sx={{ my: 0.75, borderColor: 'rgba(226,232,240,0.9)' }} />

          <DropdownItem
            icon={<DeleteOutlineIcon />}
            label="Delete"
            destructive
            onClick={handleClose}
          />
        </MenuList>
      </Menu>
    </Box>
  );
}

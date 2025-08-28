import { Box, styled } from '@mui/material';
import type { CSSProperties, ReactElement } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';

type CSSVarStyle = CSSProperties & { '--accent'?: string; '--fill'?: string };
type Site = {
  name: 'facebook' | 'youtube' | 'x' | 'instagram';
  color: string;
  icon: ReactElement;
  fill?: string;
};
const varStyle = (accent: string, fill?: string): CSSVarStyle =>
  fill ? { '--accent': accent, '--fill': fill } : { '--accent': accent };

export default function SocialButtonsMUI() {
  const sites = [
    {
      name: 'facebook',
      color: '#1877f2',
      icon: <FacebookIcon fontSize="inherit" />,
    },
    {
      name: 'youtube',
      color: '#ff0000',
      icon: <YouTubeIcon fontSize="inherit" />,
    },
    { name: 'x', color: '#111111', icon: <XIcon fontSize="inherit" /> },
    {
      name: 'instagram',
      color: '#e4405f',
      icon: <InstagramIcon fontSize="inherit" />,
      fill: 'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',
    },
  ] satisfies ReadonlyArray<Site>;

  const SocialButton = styled('a')({
    position: 'relative',
    display: 'inline-grid',
    placeItems: 'center',
    width: 90,
    height: 90,
    borderRadius: '25%',
    overflow: 'hidden',
    boxShadow: '0 5px 15px -5px rgba(0,0,0,.1)',
    transition: 'transform .3s ease',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: '120%',
      height: '120%',
      borderRadius: '50%',
      transform: 'translate(-50%,-50%) scale(0)',
      background: 'var(--fill, var(--accent))',
      transition:
        'transform .45s cubic-bezier(0.31,-0.105,0.43,1.59), opacity .2s linear',
      zIndex: 0,
      opacity: 0,
      willChange: 'transform, opacity',
    },
    '& svg': {
      position: 'relative',
      zIndex: 1,
      fontSize: 38,
      color: 'var(--accent, #111)',
      transform: 'scale(.9)',
      transition:
        'color .35s cubic-bezier(0.31,-0.105,0.43,1.59), transform .35s cubic-bezier(0.31,-0.105,0.43,1.59)',
    },
    '&:hover': { transform: 'translateY(-2px)' },
    '&:hover::before': {
      opacity: 1,
      transform: 'translate(-50%,-50%) scale(1)',
    },
    '&:hover svg': { color: '#fff', transform: 'scale(1.05)' },
  });

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5,
      }}
    >
      {sites.map((social) => (
        <SocialButton
          key={social.name}
          href="#"
          style={varStyle(social.color, social.fill)}
        >
          {social.icon}
        </SocialButton>
      ))}
    </Box>
  );
}

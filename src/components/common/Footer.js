import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Estate Window
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2, textAlign: 'left', maxWidth: {xs: '100%'} }} maxWidth="sm">
        {/* <Typography variant="h2" component="h1" gutterBottom>
          Estate Window
        </Typography> */}
        <Typography variant="h5" component="h2" gutterBottom>
          {/* {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'} */}
          <IconButton aria-label="Linkedin.com" onClick={() => window.open('https://www.Linkedin.com')}>
          <LinkedInIcon fontSize="large" color='primary' />
          </IconButton>
          <IconButton aria-label="Facebook.com" onClick={() => window.open('https://www.Facebook.com')}>
          <FacebookIcon fontSize="large" color='primary'/>
          </IconButton>
          <IconButton aria-label="GitHub.com" onClick={() => window.open('https://www.GitHub.com')}>
          <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton aria-label="Twitter.com" onClick={() => window.open('https://www.Twitter.com')}>
          <TwitterIcon fontSize="large" color='primary'/>
          </IconButton>
        </Typography>
         <br />
        <Typography variant="body1" >
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>About us |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Careers |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Accessibility |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Feedback |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Media room |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Ad Choises |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Advertise with us |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Agent Support |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Privacy |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Terms |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Home Made |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Tech Blog |</Link>
        <Link href="#" sx={{color: 'inherit', textDecoration: 'none'}}>Sitemap </Link>
        </Typography>
          <br />
        <Typography >
      {'Support: +63 907 8888 888'} <br/>
      {'Email: estatewindow@EW.ph'} <br/>
      {"Batchelor's Realty & Brokerage, Inc"}
      </Typography>

      </Container>

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          {/* <Typography variant="body1">
            Capstone two
          </Typography> */}
          <img src="/" alt="Photo" />
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
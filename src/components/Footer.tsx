import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

type FooterProps = {
  supportUrl: string;
  dashboardUrl: string;
  billingUrl: string;
  helpUrl: string;
  unsubscribeUrl: string;
  email: string;
};

const Footer: React.FC<FooterProps> = ({
  supportUrl,
  dashboardUrl,
  billingUrl,
  helpUrl,
  unsubscribeUrl,
  email,
}) => {
  return (
    <Grid container display="flex" justifyContent="center" sx={{ mt: 5, textAlign: 'start' }}>
      <Grid item xs={12} md={8}>
        <Box sx={{ display:"flex" , flexDirection:"column", justifyContent:'center',  alignItems:'center',backgroundColor: '#FFF7E0', py: 2, px: 2 }}>
          <Typography variant="body1" sx={{fontWeight:'bold'}}>
            Need more help?{' '}
          </Typography>
          <Link href={supportUrl}  color="primary">
              We’re here, ready to talk
            </Link>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography sx={{color:'black' , fontWeight:'bold'}} variant="body2" >
            <Link href={dashboardUrl} sx={{color: 'inherit'}}>Dashboard</Link> ·{' '}
            <Link href={billingUrl} sx={{color: 'inherit'}}>Billing</Link> ·{' '}
            <Link href={helpUrl} sx={{color: 'inherit'}}>Help</Link>
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            You received this email because you just signed up for a new account. If it looks weird,{' '}
            <Link href={`mailto:${email}`}  sx={{color: 'black' , fontWeight: 'bold',textDecorationColor: 'black'}} underline="always">view it in your browser</Link>.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
            If these emails get annoying, please feel free to{' '}
            <Link href={unsubscribeUrl} sx={{color: 'black' , fontWeight: 'bold',textDecorationColor: 'black'}} underline="always">unsubscribe</Link>.
          </Typography>
          <Typography variant="caption" sx={{ display: 'block', mt: 2 }}>
            Ceej · 1234 Main Street · Anywhere, MA · 56789
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

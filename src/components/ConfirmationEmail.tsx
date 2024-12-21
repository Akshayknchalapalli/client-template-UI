import React from 'react';
import { Box } from '@mui/material';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const ConfirmationEmail: React.FC = () => {
  return (
    <Box
      sx={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f5f5f5',
        minHeight: '100vh', 
        width: "100%",
        margin: '0 auto',
        display:'flex',
        justifyContent:'center'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 600, 
          backgroundColor: '#fff', 
          boxShadow: 3, 
          borderRadius: 2, 
          overflow: 'hidden', 
        }}
      >
        <Header />
        <MainContent confirmUrl="xxxxxxxxxx/xxxxxxxxx" />
        <Footer
          supportUrl="https://example.com/support"
          dashboardUrl="https://example.com/dashboard"
          billingUrl="https://example.com/billing"
          helpUrl="https://example.com/help"
          unsubscribeUrl="https://example.com/unsubscribe"
          email="support@example.com"
        />
      </Box>
    </Box>
  );
};

export default ConfirmationEmail;

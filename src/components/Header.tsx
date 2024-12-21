import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box sx={{ position:"relative", backgroundColor: '#FFA500', textAlign: 'center', py: 3, height:"150px" }}>
      <Typography variant="h4" sx={{ color: '#fff' }}>
        <CircularProgress/>
      </Typography>
    </Box>
  );
};

export default Header;

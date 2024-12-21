import React from 'react';
import { Typography, Card, CardContent, CardActions, Button, Grid } from '@mui/material';

type MainContentProps = {
  confirmUrl: string;
};

const MainContent: React.FC<MainContentProps> = ({ confirmUrl }) => {
  return (
    <Grid container justifyContent="center" sx={{ mt: -9 , position:'relative'  }}>
      <Grid item xs={12} md={8}>
        <Card sx={{ p: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom textAlign="center">
              Welcome!
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, textAlign: 'start' }}>
              We’re excited to have you get started. First, you need to confirm your account. Just press the button below.
            </Typography>
            <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href={confirmUrl}
                sx={{ textTransform: 'none' }}
              >
                Confirm Account
              </Button>
            </CardActions>
            <Typography variant="body2" sx={{ mt: 3, textAlign: 'start' }}>
              If that doesn’t work, copy and paste the following link in your browser:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                wordBreak: 'break-all',
                textAlign: 'start',
                color:'#FFA500',
              }}
            >
              {confirmUrl}
            </Typography>
            <Typography variant="body2" sx={{ mt: 3, textAlign: 'start' }}>
              If you have any questions, just reply to this email—we’re always happy to help out.
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, textAlign: 'start', fontWeight: 'bold' }}>
              Cheers,
              <br />
              The Ceej Team
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MainContent;

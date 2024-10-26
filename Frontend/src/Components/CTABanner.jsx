// src/components/CTABanner.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const CTABanner = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundImage: 'url("https://images.pexels.com/photos/11866873/pexels-photo-11866873.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load")', // Background image
                backgroundSize: 'cover',
                color: 'white',
                textAlign: 'center',
                height: '300px',
                position: 'relative',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for better text visibility
                    zIndex: 1,
                },
            }}
        >
            <Typography variant="h4" sx={{ zIndex: 2, fontWeight: 'bold', marginBottom: 2 }}>
                Discover Our Latest Collections
            </Typography>
            <Typography variant="body1" sx={{ zIndex: 2, marginBottom: 3 }}>
                Explore unique fragrances that elevate your essence.
            </Typography>
            <Button 
                variant="contained" 
                color="secondary" 
                sx={{ zIndex: 2 }} 
            >
                Shop Now
            </Button>
        </Box>
    );
};

export default CTABanner;

import React from 'react';
import { Box, Typography, Link, IconButton, Grid, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export const Footer = () => {
    return (
        <Box 
            sx={{
                backgroundColor: '#1c1c1e',
                color: '#f1f1f1',
                padding: '1rem 0', 
                mt: 'auto',
            }}
        >
            {/* Grid Layout for content alignment on larger screens */}
            <Grid container justifyContent="center" spacing={4} sx={{ textAlign: 'center' }}>
                
                {/* Brand Logo/Title Section */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 0.5 }}> {/* Reduced margin bottom */}
                        PerfumeStore
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#aaa' }}>
                        Elevate your fragrance journey with us.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}> {/* Reduced gap */}
                        <Link href="/" color="inherit" underline="hover">Home</Link>
                        <Link href="/" color="inherit" underline="hover">Products</Link>
                        <Link href="/about" color="inherit" underline="hover">About Us</Link>
                        <Link href="/" color="inherit" underline="hover">Contact</Link>
                    </Box>
                </Grid>

                {/* Contact Information */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" sx={{ mb: 0.5 }}> {/* Reduced margin bottom */}
                        Contact Us
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ mb: 0.5, color: '#bbb' }}> {/* Reduced margin bottom */}
                        Email: <Link href="mailto:PerfumeStore@gmail.com" color="inherit" underline="hover">abhishekm6968@gmail.com</Link>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ color: '#bbb' }}>
                        Phone: 8590060196
                    </Typography>
                </Grid>
            </Grid>

            <Divider sx={{ backgroundColor: '#444', my: 2 }} /> {/* Reduced margin */}
            
            {/* Social Media and Copyright */}
            <Box display="flex" justifyContent="center" gap={2} mb={1}>
                <IconButton href="https://facebook.com" target="_blank" color="inherit">
                    <Facebook />
                </IconButton>
                <IconButton href="https://x.com/Abhishe84513972" target="_blank" color="inherit">
                    <Twitter />
                </IconButton>
                <IconButton href="https://instagram.com" target="_blank" color="inherit">
                    <Instagram />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/abhishekm6968/" target="_blank" color="inherit">
                    <LinkedIn />
                </IconButton>
            </Box>
            
            <Typography variant="body2" color="textSecondary"  display='flex' justifyContent="center" sx={{ color: '#666', fontSize: '0.8rem'}}>
                &copy; {new Date().getFullYear()} PerfumeStore. All Rights Reserved.
            </Typography>
        </Box>
    );
};

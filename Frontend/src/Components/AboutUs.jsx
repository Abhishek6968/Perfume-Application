import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';

const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { name: 'John Doe', role: 'CTO', image: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { name: 'Emily Davis', role: 'Marketing Head', image: 'https://randomuser.me/api/portraits/women/45.jpg' },
    { name: 'Michael Brown', role: 'Product Manager', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
];

const AboutUs = () => {
    return (
        <Box  
            sx={{
                width: '100vw',
                minHeight: '100vh',
                padding: '40px 20px',
                backgroundColor: '#f5f5f5',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    textAlign: 'center',
                    color: '#333',
                    width: '100%',
                }}
            >
                About Us
            </Typography>

            <Typography
                variant="body1"
                color="text.secondary"
                sx={{
                    mb: 4,
                    lineHeight: 1.6,
                    textAlign: 'center',
                    maxWidth: '800px',
                }}
            >
                We are a passionate team dedicated to providing top-quality products and services to our customers.
                Our mission is to create lasting value and impact through innovation and excellence. At the core of
                our values are integrity, customer satisfaction, and continuous improvement.
            </Typography>

            {/* Mission & Values */}
            <Grid container spacing={4} sx={{ width: '100%', maxWidth: '1200px', mb: 4, px: 2 }}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, boxShadow: 3, backgroundColor: '#fff' }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                                Our Mission
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To revolutionize our industry with unparalleled solutions and outstanding customer
                                service, fostering growth and value for both our clients and employees.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 2, boxShadow: 3, backgroundColor: '#fff' }}>
                        <CardContent>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#333' }}>
                                Our Values
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Innovation, integrity, customer success, and teamwork drive everything we do. We
                                believe in empowering our people to make a difference and achieve their fullest
                                potential.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Team Section */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: '#333', width: '100%' }}>
                Meet Our Team
            </Typography>

            <Grid container spacing={4} sx={{ width: '100%', maxWidth: '1200px', px: 2 }}>
                {teamMembers.map((member, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Card
                            sx={{
                                textAlign: 'center',
                                boxShadow: 3,
                                padding: '16px 8px',
                                backgroundColor: '#fff',
                                maxWidth: '250px',
                                margin: 'auto',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)',
                                    boxShadow: 6,
                                },
                            }}
                        >
                            <Avatar
                                src={member.image}
                                alt={member.name}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    margin: 'auto',
                                    mb: 2,
                                    border: '2px solid #333',
                                }}
                            />
                            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                                {member.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {member.role}
                            </Typography>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default AboutUs;

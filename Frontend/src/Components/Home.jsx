import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/home/')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <Grid container spacing={2} justifyContent="center">
            {data.map((row) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={row._id}>
                    <Card 
                        sx={{ 
                            maxWidth: 345, 
                            margin: '20px', 
                            height: '100%', // Ensures cards have full height within their grid item
                            display: 'flex',
                            flexDirection: 'column',
                            transition: 'transform 0.3s ease-in-out', 
                            '&:hover': { 
                                transform: 'scale(1.05)' 
                            }
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"
                            image={row.productImage}
                            alt={row.productName}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {row.productName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {row.productDescription}
                            </Typography>
                            <Typography variant="h6" color="primary" sx={{ marginTop: '10px' }}>
                                ${row.productPrice}
                            </Typography>
                            <Link to={`/product/${row._id}`} style={{ textDecoration: 'none' }}>
                                <Button variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                                    View Details
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

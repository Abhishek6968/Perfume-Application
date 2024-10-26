// src/components/ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, Button, Grid, IconButton, Divider, TextField, Avatar } from '@mui/material';
import { Facebook, Twitter, WhatsApp } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-material-ui-carousel';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [reviewText, setReviewText] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/home/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.log(err));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const handleShare = (platform) => {
        const url = window.location.href;
        if (platform === 'facebook') {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        } else if (platform === 'twitter') {
            window.open(`https://twitter.com/intent/tweet?url=${url}`, '_blank');
        } else if (platform === 'whatsapp') {
            window.open(`https://api.whatsapp.com/send?text=${url}`, '_blank');
        }
    };

    const handleAddReview = () => {
        if (reviewText.trim()) {
            setReviews([...reviews, { text: reviewText, date: new Date().toLocaleDateString() }]);
            setReviewText('');
        }
    };

    return (
        <Box sx={{
            width: '100vw',
            maxWidth: '100%',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            padding: '0',
            boxSizing: 'border-box',
        }}>
            <Box sx={{
                width: '100%',
                maxWidth: '900px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Grid container sx={{ height: '70%' }}>
                    {/* Left Image Gallery Section */}
                    <Grid item xs={12} md={6} sx={{ padding: '10px' }}>
                        <Carousel autoPlay={false} indicators={false}>
                            {product?.imageGallery.map((imgUrl, index) => (
                                <Box
                                    key={index}
                                    component="img"
                                    src={imgUrl}
                                    alt={`product-image-${index}`}
                                    sx={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                            ))}
                        </Carousel>
                    </Grid>

                    {/* Right Product Info Section */}
                    <Grid item xs={12} md={6} sx={{ padding: '20px', overflowY: 'auto' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                            {product.productName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {product.productCategory}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                            {product.productDescription}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                            Available Sizes: {product.availableSizes?.join(', ') || 'N/A'}
                        </Typography>
                        <Typography variant="h5" color="primary" sx={{ fontWeight: 'bold', my: 2 }}>
                            ${product.productPrice}
                        </Typography>
                        <Button variant="contained" color="primary" startIcon={<ShoppingCartIcon />} fullWidth>
                            Add to Cart
                        </Button>
                        <Box display="flex" alignItems="center" gap={1} sx={{ mt: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                Share this product:
                            </Typography>
                            <IconButton color="primary" onClick={() => handleShare('facebook')}>
                                <Facebook />
                            </IconButton>
                            <IconButton color="primary" onClick={() => handleShare('twitter')}>
                                <Twitter />
                            </IconButton>
                            <IconButton color="primary" onClick={() => handleShare('whatsapp')}>
                                <WhatsApp />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* Reviews Section */}
                <Box sx={{
                    padding: '10px',
                    backgroundColor: '#fafafa',
                    height: '30%',
                    overflowY: 'auto',
                }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Customer Reviews</Typography>
                    {reviews.length > 0 ? (
                        reviews.slice(0, 5).map((review, index) => (
                            <Box key={index} display="flex" alignItems="center" gap={2} sx={{ mb: 1 }}>
                                <Avatar sx={{ bgcolor: 'primary.main' }}>
                                    {review.text.charAt(0).toUpperCase()}
                                </Avatar>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{review.date}</Typography>
                                    <Typography variant="body2" color="text.secondary">{review.text}</Typography>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" color="text.secondary">No reviews yet.</Typography>
                    )}
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            label="Add a review"
                            variant="outlined"
                            fullWidth
                            multiline
                            minRows={2}
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 1, fontWeight: 'bold' }}
                            onClick={handleAddReview}
                        >
                            Submit Review
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;

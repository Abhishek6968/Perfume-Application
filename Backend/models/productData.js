// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     productImage: String,       // URL to the product image
//     productId: String,          // Unique identifier for the product
//     productName: String,        // Name of the product
//     productCategory: String,    // Category of the product (e.g., Perfume, Cologne, etc.)
//     productDescription: String, // Brief description of the product
//     productPrice: Number        // Price of the product
// });

// const ProductData = mongoose.model('products', productSchema);

// module.exports = ProductData;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true
        },
        productImage: String,
        productName: String,
        productCategory: String,
        productDescription: String,
        productDetails: String,
        productPrice: Number,
        availableSizes: [String],
        imageGallery: [String],
        reviews: [
            {
                userName: String,
                rating: {
                    type: Number,
                    min: 1,
                    max: 5
                },
                comment: String,
                date: {
                    type: Date,
                    default: Date.now
                }
            }
        ],
        shareableLink: String
    }
);

const ProductData = mongoose.model('Product', productSchema);

module.exports = ProductData;

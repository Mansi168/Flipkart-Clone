import mongoose from "mongoose";

//validation step necessary bcz data is coming from frontend
const ProductSchema = new mongoose.Schema({
    id: { //detailed validation
        type: String,
        required: true,
        unique: true,
    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

//iske bad model bnana h

const Product = mongoose.model('product', ProductSchema);

export default Product;
import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export { ProductModel };

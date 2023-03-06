import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

const OrderSchema = new mongoose.Schema(
  {
    products: {
      type: [ProductSchema],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model('Order', OrderSchema);

export { OrderModel };

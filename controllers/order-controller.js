import { OrderModel } from '../models/order.js';

export async function createOrder(req, res) {
  try {
    const object = new OrderModel({
      products: req.body.products,
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
    });

    const order = await object.save();

    res.json('Заказ создан');
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Не удалось создать заказ',
    });
  }
}

export async function getOrders(req, res) {
  try {
    const products = await OrderModel.find().populate('products.id');

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Не удалось получить заказы',
    });
  }
}

import { ProductModel } from '../models/product.js';

export async function createProduct(req, res) {
  try {
    const object = new ProductModel({
      title: req.body.title,
      img: req.body.img,
      gender: req.body.gender,
      price: req.body.price,
      count: req.body.count,
    });

    const product = await object.save();

    res.json('Товар создан');
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Не удалось создать товар',
    });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await ProductModel.find();

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Не удалось получить товары',
    });
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);

    res.json(product);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Не удалось получить товар',
    });
  }
};

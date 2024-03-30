import mongoose, { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
  productId: { type: Number, required: true, unique: true },
  productName: { type: String },
  productDescription: { type: String },
  productPrice: { type: Number },
});

const ProductModel =
  mongoose.models.Products || model("Products", ProductsSchema, "products");

export { ProductModel, ProductsSchema };

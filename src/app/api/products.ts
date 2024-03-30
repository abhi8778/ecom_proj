// pages/api/products.ts
import connectToDatabase from "../db/db";
import { ProductModel } from "../db/models/products";
import { NextRequest, NextResponse } from "next/server";

export default async function handler(
  request: NextRequest,
  response: NextResponse
) {
  // Connect to MongoDB
  await connectToDatabase();

  try {
    // Fetch products from MongoDB
    const products = await ProductModel.find({}).exec();

    // Return the fetched products as JSON
    response.statusCode = 200; // Set the status code
    response.json(products); // Send the JSON data
  } catch (error) {
    console.error("Error fetching products:", error);
    response.statusCode = 500; // Set the status code
    response.json({ error: "Internal Server Error" }); // Send the error message
  }
}

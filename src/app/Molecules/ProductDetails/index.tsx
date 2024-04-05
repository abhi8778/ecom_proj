"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectProductItems } from "../../lib/store/slices/cart";

interface Product {
  _id: string;
  productId: number;
  brandName: string;
  productName: string;
  productDescription: string;
  productPrice: number;
}

interface ProductDetailsProps {
  param: { productId: string };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ param }) => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log(param);
    console.log("in");

    const getProducts = async (searchId: number) => {
      try {
        const response = await fetch(
          `/api/products/prodId?${searchId > 0 ? `query=${searchId}` : 0}`
        );

        console.log(response);
        const resp = await response.json();
        console.log(resp);
        setProducts(resp);
      } catch {
        console.log("err");
      }
    };

    const numericValue: number = Number(param.productId);

    if (numericValue > 0) {
      getProducts(numericValue);
    } else {
      getProducts(0);
    }
  }, [param]);

  return (
    <main>
      <div className="container mx-auto mt-10 ">
        <div className="flex flex-col md:flex-row ">
          <div className="mt-4 md:mt-0 md:ml-6 rounded-md bg-blue-500 p-10">
            <h1 className="text-xl font-bold text-gray-900">
              {products[0]?.productName}
            </h1>
            <p className="mt-2 text-gray-900">
              {products[0]?.productDescription}
            </p>
            <div className="mt-3">
              <span className="text-gray-900">Price:</span>
              <span className="ml-1 text-gray-900 font-bold">
                £{products[0]?.productPrice}
              </span>
            </div>
            <div className="mt-6">
              <button className="px-8 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-blue-700">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ProductDetails;

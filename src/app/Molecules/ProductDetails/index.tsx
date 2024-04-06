"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { selectProductItems } from "../../lib/store/slices/cart";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/redux";
import { addToCart } from "../store/slice/cart";
// import { addToCart } from "../../lib/store/slices/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RootState } from "../../lib/store/index";

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
  const dispatch = useAppDispatch();
  //   const prodD = useAppDispatch(selectProductItems);

  useEffect(() => {
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

  const addToCartClient = () => {
    if (products) {
      dispatch(addToCart(products));
      toast("Added to cart successfully", {
        type: "success",
        theme: "dark",
        autoClose: 2000,
      });
    }
  };

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
            <div className="mt-6 flex gap-4">
              <button
                className="px-8 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-blue-700"
                onClick={addToCartClient}
              >
                Add to Cart
              </button>
              <button
                className="px-8 py-2 bg-green-500 text-white text-sm font-medium rounded hover:bg-blue-700"
                onClick={() => {
                  router.push("/checkoutCart");
                }}
                type="button"
              >
                Go to CArt
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};
export default ProductDetails;

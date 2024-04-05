"use client";
import { useEffect } from "react";
import ProductDetails from "../../../Molecules/ProductDetails/index";

interface ProductDetProps {
  params: { productId: string };
}

const ProductDet: React.FC<ProductDetProps> = ({ params }) => {
  useEffect(() => {
    console.log(params.productId);
  }, [params.productId]);

  return <ProductDetails param={params} />;
};

export default ProductDet;

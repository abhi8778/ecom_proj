"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/lib/hooks/redux";
import { removeFromCart, cartItemsAvailable } from "../store/slice/cart";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { removeFromCart } from "../store/slice/cart";

interface Product {
  id: number;
  productName: string;
  price: number;
  quantity: number;
}

export default function checkoutCartDetails() {
  const cartItems = useAppSelector(cartItemsAvailable);
  console.log(cartItems);
  const rows: Product[] = cartItems;
  const columns: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "productName", headerName: "Product Name", width: 200 },
    { field: "productPrice", headerName: "Price", type: "number", width: 110 },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 150,
      renderCell: (params) => (
        <input
          type="number"
          value={params.value}
          onChange={(e) => {
            const newQuantity = parseInt(e.target.value, 10) || 0;
            // Dispatch an action to update quantity in your Redux store if needed
            console.log("New quantity:", newQuantity);
          }}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <button
          onClick={() => {
            // Implement logic to remove the row
            console.log(
              "Remove button clicked for row with ID:",
              params.row.id
            );
          }}
        >
          Remove
        </button>
      ),
    },
  ];

  return (
    <main>
      <div className="container mx-auto mt-10 text-gray-900">
        <div className="flex shadow-md my-10">
          <div className="w-full bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">3 Items</h2>
            </div>
            {/* <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5">
                Remove
              </h3>
            </div>

            <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
              <div className="flex w-2/5">
                <div className="w-20">
                  <img className="h-24" src="product-image-url.jpg" alt="" />
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow ">
                  <span className="font-bold text-sm">Product Name</span>
            
                </div>
              </div>
              <div className="flex justify-center w-1/5">
                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value="1"
                />
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                £Price
              </span>
              <div className="flex justify-center w-1/5">
                <button className="fill-current text-gray-500 w-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div> */}
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                getRowId={(row) => row.productId}
                rows={rows}
                columns={columns}
              />
            </div>

            <div className="flex justify-between items-center mt-6 pt-6 border-t">
              <div className="flex items-center">
                <i className="fa fa-arrow-left text-sm pr-2"></i>
                <a
                  href="/products"
                  className="text-md font-medium text-indigo-500"
                >
                  Continue Shopping
                </a>
              </div>
              <div className="flex justify-center items-end">
                <span
                  className="text-sm font-medium text-gray
                        -900"
                >
                  Subtotal:
                </span>
                <span className="text-lg ml-3 font-bold text-gray-900">
                  £Total
                </span>
              </div>
              <div className="flex">
                <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

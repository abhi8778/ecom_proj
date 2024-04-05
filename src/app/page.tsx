"use client";
import StoreProvider from "./StoreProvider";
import Login from "./login/page";
import Banner from "./Atoms/Banner";
import Link from "next/link";
import ProductsPage from "./Molecules/Products";
import { Component } from "react";

export default function Home() {
  return (
    <main>
      <Link href={"/login"}>Login</Link>

      {/* <Banner
          image="https://via.placeholder.com/1200x400"
          alt="Banner image"
        /> */}
      {/* <ProductsPage /> */}
    </main>
  );
}

import Link from "next/link";
import React from "react";

const Products = () => {
  const productId = 100;
  return (
    <div>
      <h1>product list</h1>
      <div>product 1</div>
      <div>product 2</div>
      <div>product 3</div>

      {/* using Link component from next/link */}
      <Link href="/products/1">product 1</Link>
      <Link href="/products/2">product 2</Link>
      <Link href="/products/3">product 3</Link>
      {/* not hard code produis */}
      <Link href={`/products/${productId}`} replace>product {productId} </Link>
    </div>
  );
};

export default Products;

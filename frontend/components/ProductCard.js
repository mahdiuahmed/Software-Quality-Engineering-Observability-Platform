import React from "react";
import { Button } from "./ui/button";

export default function ProductCard(product) {
  return (
    <div data-testid="container" className="border p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm">{product.description}</p>
      <p className="mt-2 font-bold">${product.price}</p>
      <Button
        data-testid="button"
        className="mt-3 inline-block bg-blue-600 text-white px-3 py-1 rounded"
      >
        Add to cart
      </Button>
    </div>
  );
}

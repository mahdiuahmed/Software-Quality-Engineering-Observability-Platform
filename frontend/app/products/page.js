"use client";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    // {
    //   name: "MacBook Air",
    //   description: "13-inch Apple laptop",
    //   price: 999.99,
    //   id: 1,
    // },
    // {
    //   name: "Logitech Mouse",
    //   description: "Wireless mouse",
    //   price: 29.99,
    //   id: 2,
    // },
    // {
    //   name: "Samsung Monitor",
    //   description: "27-inch 1080p monitor",
    //   price: 199.99,
    //   id: 3,
    // },
  ]);

  useEffect(() => {
    const apiURL =
      process.env.NODE_ENV === "production"
        ? "http://backend:8000"
        : "http://localhost:4000";

    console.log("Environment:", process.env.NODE_ENV);
    console.log("Fetching from:", apiURL);

    fetch(`${apiURL}/products`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(setProducts)
      .catch((error) => {
        console.error("Failed to fetch products:", error);
        // Optional: Set some fallback data or error state
      });
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="grid grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              name={p.name}
              description={p.description}
              price={p.price}
            />
            // <li key={p.id} className="p-4 border rounded-lg" data-testid="list">
            //   <h2 className="font-semibold">{p.name}</h2>
            //   <p>{p.description}</p>
            //   <p>${p.price}</p>
            // </li>
          ))}
        </ul>
      )}
      {/* <Button data-testid="button">TEST</Button> */}
    </main>
  );
}

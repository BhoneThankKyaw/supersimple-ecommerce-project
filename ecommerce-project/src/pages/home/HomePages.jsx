import axios from "axios";
import "./Home.css";
import { Header } from "../../Components/Header";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";

export function HomePages({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products}></ProductGrid>
      </div>
    </>
  );
}

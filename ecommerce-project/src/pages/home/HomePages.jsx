import axios from "axios";
import "./Home.css";
import { Header } from "../../Components/Header";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";

export function HomePages({ cart, loadCart }) {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="/home-favicon.png" />
      <Header cart={cart} />

      <div className="home-page">
        <ProductGrid products={products} loadCart={loadCart}></ProductGrid>
      </div>
    </>
  );
}

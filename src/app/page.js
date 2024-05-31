"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error fetching products ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loding...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="">
          <img src={product.image} alt={product.title} className="" />
          <h2 className="">{product.title}</h2>
          <p className="">{product.price}</p>
          <p className="">50% Off</p>
          <button className="">Add to Cart</button>
          <FontAwesomeIcon icon={faBookmark} className="" />
        </div>
      ))}
    </div>
  );
}

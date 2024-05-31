"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./components/Navbar";
import Header from "./components/Header";

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
    <>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gp-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.title} className="w-full h-64 object-cover" /> {/* check this css, image is breaking*/}
            <h2 className="text-xl my-2">{product.title}</h2>
            <p className="text-lg font-bold">{product.price}</p>
            <p className="text-green-500">50% Off</p>
            <button className="mt-2 p-2 bg-black text-white w-full">Add to Cart</button>
            <FontAwesomeIcon icon={faBookmark} className="text-gray-500 float-right mt-2" />
          </div>
        ))}
      </div>
    </>
  );
}

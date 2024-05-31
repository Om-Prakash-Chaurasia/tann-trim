"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  faBagShopping,
  faBookmark,
  faIndianRupee,
} from "@fortawesome/free-solid-svg-icons";
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
    <div className="bg-black text-white">
      <Header />
      <Navbar />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gp-4 mt-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-x-2 border-y-2 rounded-md  p-4 m-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-80"
            />
            <FontAwesomeIcon
              icon={faBookmark}
              className="text-gray-500 float-right mt-2 cursor-pointer hover:text-white"
            />
            <h2 className="text-xl my-2">{product.title}</h2>
            <div className="container flex mx-auto justify-between">
              <div className="flex">
                <p className="text-xl font-bold">
                  <FontAwesomeIcon
                    icon={faIndianRupee}
                    className="text-white"
                  />
                  {product.price}
                </p>
                <p className="text-green-500 mx-2 my-2 text-xs">50% Off</p>
              </div>
              <FontAwesomeIcon
                icon={faBagShopping}
                className="text-2xl hover:text-gray-400 cursor-pointer mr-3"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

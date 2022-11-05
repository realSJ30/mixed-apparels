import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((ee) => console.log(ee));
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col container mx-auto">
      <div className="mb-8">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700">
          Search
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="T-shirts, pants, shoes and etc."
          />

        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-12 p-4">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;

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
    <div className="grid grid-cols-4 gap-y-10 gap-x-12">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <Link key={id} to={`/product/${id}`}>
        <div className="group relative shadow-md p-4 cursor-pointer">
          <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img
              src={image}
              alt={"MIXED APPAREL"}
              className="w-full h-full object-center object-cover lg:w-full lg:h-full"
            />
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-sm text-gray-700 font-bold w-10/12">
                {title}
              </h3>
              <p className="mt-1 text-sm text-gray-500 uppercase">{category}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">{price}</p>
          </div>
        </div>
      </Link>
    );
  });

  return renderList;
};

export default ProductComponent;

import React from "react";

function ProductCard({ product }) {
  const { name, description, price, image } = product;

  return (
    <div className="bg-black rounded-lg shadow-md p-6 h-fit mx-2 text-white">
      <img src={image} alt={name} className="w-full h-full object-cover mb-4" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-xl font-bold mt-2 text-green-500">{price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

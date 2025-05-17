import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          R${product.price}
        </span>
        <button className="bg-[#800F0F] hover:bg-gray-500 text-white font-semibold py-1 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

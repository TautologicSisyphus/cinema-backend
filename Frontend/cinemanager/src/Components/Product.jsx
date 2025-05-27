import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Components/CartSlice';
import { Provider } from 'react-redux';
import Alimentos from '../Pages/Alimentos';


const ProductCard = ({ product }) => {
  // Importando o hook useDispatch do Redux para despachar ações
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        {/*<p className="text-sm text-gray-500 mt-2">ID: {product.id}</p>*/}
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          R${product.price}
        </span>
        <button onClick={() => addToCart(product)} className="bg-[#800F0F] hover:bg-gray-500 text-white font-semibold py-1 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

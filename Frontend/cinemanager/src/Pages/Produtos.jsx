import React from 'react';
import ProductCard from '../Components/Product';
import { Link } from "react-router-dom";
import logo from "../assets/logoCineManager.png"

const products = [
  {
    id: 1,
    name: 'Pipoca Grande',
    description: 'Pipoca grande, perfeita para dividir.',
    price: 19.99,
    image: "https://images.pexels.com/photos/5112444/pexels-photo-5112444.jpeg",
    //Créditos: https://www.pexels.com/photo/close-up-shot-of-a-bucket-of-popcorn-5112444/
  },
  {
    id: 2,
    name: 'Refrigerante 500ml',
    description: 'Refrigerante gelado para acompanhar seu filme.',
    price: 8.49,
    image: 'https://images.pexels.com/photos/5332073/pexels-photo-5332073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //Créditos: https://www.pexels.com/photo/cup-of-cola-beside-a-bag-of-popcorn-5332073/
  },
  {
    id: 3,
    name: 'Combo Nachos',
    description: 'Nachos crocantes com molho especial.',
    price: 9.99,
    image: 'https://images.pexels.com/photos/4960237/pexels-photo-4960237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // Créditos: https://www.pexels.com/photo/a-person-holding-a-bag-of-chips-4960237/
  },
  // Adicione mais produtos conforme necessário
];

const Produtos = () => {
    const CartSlice = React.lazy(() => import('../Components/CartSlice'));

    return (
      <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="flex justify-center mb-12 w-full relative">
      <Link to="/">
      <img src={logo} alt="CineManager" className="w-72 hover:scale-105 transition-all" />
      </Link>
      <button
        onClick={() => alert('Carrinho indisponível no momento.')}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#C0C0C0] text-black px-4 py-2 rounded hover:bg-[#a0a0a0] transition-all"
      >
      <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3243378/shopping-cart-solid-icon-md.png" alt="Imagem de carrinho" className="w-6 h-6"/>
      </button>
      </div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-[#C0C0C0] mb-4">Lista de Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      </div>
      </div>
      </div>
    );
};


export default Produtos;

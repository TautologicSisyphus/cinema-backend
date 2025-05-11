import React from 'react';
import ProductCard from '../Components/Product';
import { Link } from "react-router-dom";
//import { useState } from "react";
import logo from "../assets/logoCineManager.png"

const products = [
  {
    id: 1,
    name: 'Pipoca Grande',
    description: 'Pipoca grande, perfeita para dividir.',
    price: 15.99,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Refrigerante 500ml',
    description: 'Refrigerante gelado para acompanhar seu filme.',
    price: 8.49,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Combo Nachos',
    description: 'Nachos crocantes com molho especial.',
    price: 20.99,
    image: 'https://via.placeholder.com/150',
  },
];

const Produtos = () => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-40">
            <div className="flex justify-center mb-12">
                <Link to="/">
                    <img src={logo} alt="CineManager" className="w-72 hover:scale-105 transition-all" />
                </Link>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Lista de Produtos</h1>
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

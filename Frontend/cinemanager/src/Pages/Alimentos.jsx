import ProductCard from '../Components/Product';
import { Link } from "react-router-dom";
import logo from "../assets/logoCineManager.png"
import Header from '../Components/Header';
import React, { useState } from 'react';

const defaultProducts = [
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
];

function ProdutosAlim() {
  const [products, setProducts] = useState(defaultProducts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); 

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="flex justify-center mb-12">
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
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
}


export default ProdutosAlim;

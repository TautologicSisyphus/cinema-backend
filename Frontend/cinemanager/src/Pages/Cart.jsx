import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../Components/Header';
import { removeItem, clearCart } from '../Components/CartSlice';

const Cart = () => {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md mb-8 mt-40">
        <h1 className="text-2xl font-bold text-[#C0C0C0] mb-4 text-center">Seu Carrinho</h1>
        {items.length === 0 ? (
          <p className="text-[#C0C0C0] text-center">O carrinho está vazio.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {items.map(item => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-700">
                  <div>
                    <span className="font-semibold text-[#C0C0C0]">{item.name}</span>
                    <span className="text-[#C0C0C0] ml-2">x{item.quantity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#C0C0C0]">R${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      className="bg-red-700 text-white px-2 py-1 rounded hover:bg-red-900"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center text-[#C0C0C0] font-bold mb-4">
              <span>Total de itens: {totalQuantity}</span>
              <span>Total: R${totalPrice.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-[#800F0F] hover:bg-red-800 text-white font-semibold py-2 px-4 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Limpar Carrinho
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/CartSlice';
import ingressoReducer from './Slices/IngressoSlice';
import productsReducer from './Slices/ProductsSlice';
import sessaoReducer from './Slices/SessaoSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ingressos: ingressoReducer,
    products: productsReducer,
    sessoes: sessaoReducer,
  },
});

export default store;
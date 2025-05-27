import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Components/CartSlice';
import ingressoReducer from './Slices/IngressoSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ingressos: ingressoReducer,
  },
});

export default store;
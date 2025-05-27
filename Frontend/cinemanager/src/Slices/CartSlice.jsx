import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

// Cria um slice do Redux chamado 'cart' para gerenciar o estado do carrinho de compras
const cartSlice = createSlice({
    name: 'cart', // Nome do slice
    initialState: initialState, // Estado inicial do carrinho
    reducers: {
        // Adiciona um item ao carrinho
        addItem(state, action) {
            const item = action.payload; // Item a ser adicionado
            // Verifica se o item já existe no carrinho
            const existingItem = state.items.find(i => i.id === item.id);
            // Atualiza a quantidade total e o preço total do carrinho
            state.totalQuantity += item.quantity;
            state.totalPrice += item.price * item.quantity;
            if (existingItem) {
                // Se o item já existe, apenas incrementa a quantidade
                existingItem.quantity += item.quantity;
            } else {
                // Se não existe, adiciona o novo item ao array
                state.items.push({ ...item });
            }
        },
        // Remove um item do carrinho pelo id
        removeItem(state, action) {
            const id = action.payload; // Id do item a ser removido
            // Procura o item existente no carrinho
            const existingItem = state.items.find(i => i.id === id);
            if (existingItem) {
                // Atualiza a quantidade total e o preço total do carrinho
                state.totalQuantity -= existingItem.quantity;
                state.totalPrice -= existingItem.price * existingItem.quantity;
                // Remove o item do array de itens
                state.items = state.items.filter(i => i.id !== id);
            }
        },
        // Limpa todo o carrinho
        clearCart(state) {
            state.items = []; // Remove todos os itens
             // Zera a quantidade total e o preço total
            state.totalQuantity = 0;
            state.totalPrice = 0; 
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
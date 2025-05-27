import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

// Adapter
const productsAdapter = createEntityAdapter();

// Estado inicial
const initialState = productsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

// Async Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('http://localhost:3001/products');
    return await response.json();
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (newProduct) => {
    const response = await fetch('http://localhost:3001/products', {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async (product) => {
    const response = await fetch(`http://localhost:3001/products/${product.id}`, {
      method: 'PUT',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id) => {
    await fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    });
    return id;
  }
);

// Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        productsAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        productsAdapter.addOne(state, action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        productsAdapter.upsertOne(state, action.payload);
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        productsAdapter.removeOne(state, action.payload);
      });
  },
});

// Selectors
export const {
  selectAll: selectAllProducts,
  selectById: selectProductById,
} = productsAdapter.getSelectors((state) => state.products);

export default productsSlice.reducer;

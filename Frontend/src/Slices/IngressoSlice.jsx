import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

// Adapter
const ingressosAdapter = createEntityAdapter();

// Estado inicial
const initialState = ingressosAdapter.getInitialState({
  status: 'idle',
  error: null,
});

// Async Thunks
export const fetchIngressos = createAsyncThunk(
  'ingressos/fetchIngressos',
  async () => {
    const response = await fetch('http://localhost:3001/ingressos');
    return await response.json();
  }
);

export const addIngresso = createAsyncThunk(
  'ingressos/addIngresso',
  async (novoIngresso) => {
    const response = await fetch('http://localhost:3001/ingressos', {
      method: 'POST',
      body: JSON.stringify(novoIngresso),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  }
);

export const updateIngresso = createAsyncThunk(
  'ingressos/updateIngresso',
  async (ingresso) => {
    const response = await fetch(`http://localhost:3001/ingressos/${ingresso.id}`, {
      method: 'PUT',
      body: JSON.stringify(ingresso),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  }
);

export const deleteIngresso = createAsyncThunk(
  'ingressos/deleteIngresso',
  async (id) => {
    await fetch(`http://localhost:3001/ingressos/${id}`, {
      method: 'DELETE'
    });
    return id;
  }
);

// Slice
const ingressoSlice = createSlice({
  name: 'ingressos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngressos.fulfilled, (state, action) => {
        ingressosAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchIngressos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIngressos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addIngresso.fulfilled, (state, action) => {
        ingressosAdapter.addOne(state, action.payload);
      })
      .addCase(deleteIngresso.fulfilled, (state, action) => {
        ingressosAdapter.removeOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllIngressos,
  selectById: selectIngressoById,
} = ingressosAdapter.getSelectors((state) => state.ingressos);

export default ingressoSlice.reducer;



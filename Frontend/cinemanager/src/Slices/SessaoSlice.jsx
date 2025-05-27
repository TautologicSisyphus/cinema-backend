import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';

// Adapter
const SessaoAdapter = createEntityAdapter();

// Estado inicial
const initialState = SessaoAdapter.getInitialState({
  status: 'idle',
  error: null,
});

// Async Thunks
export const fetchSessoes = createAsyncThunk(
  'Sessoes/fetchSessoes',
  async () => {
    const response = await fetch('http://localhost:3001/sessoes');
    return await response.json();
  }
);

export const addSessao = createAsyncThunk(
  'sessoes/addSessao',
  async (novoSessao) => {
    const response = await fetch('http://localhost:3001/sessoes', {
      method: 'POST',
      body: JSON.stringify(novoSessao),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  }
);

export const updateSessao = createAsyncThunk(
  'sessoes/updateSessao',
  async (sessao) => {
    const response = await fetch(`http://localhost:3001/sessoes/${sessao.id}`, {
      method: 'PUT',
      body: JSON.stringify(sessao),
      headers: { 'Content-Type': 'application/json' }
    });
    return await response.json();
  }
);

export const deleteSessao = createAsyncThunk(
  'sessoes/deleteSessao',
  async (id) => {
    await fetch(`http://localhost:3001/sessoes/${id}`, {
      method: 'DELETE'
    });
    return id;
  }
);

// Slice
const sessaoSlice = createSlice({
  name: 'sessoes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessoes.fulfilled, (state, action) => {
        sessoesAdapter.setAll(state, action.payload);
        state.status = 'succeeded';
      })
      .addCase(fetchSessoes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSessoes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addSessao.fulfilled, (state, action) => {
        sessoesAdapter.addOne(state, action.payload);
      })
      .addCase(deleteSessao.fulfilled, (state, action) => {
        sessoesAdapter.removeOne(state, action.payload);
      });
  },
});

export const {
  selectAll: selectAllSessoes,
  selectById: selectSessaoById,
} = SessaoAdapter.getSelectors((state) => state.sessoes);

export default sessaoSlice.reducer;

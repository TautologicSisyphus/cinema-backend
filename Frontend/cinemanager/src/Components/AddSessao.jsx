import { useState } from "react";

const AddSessaoModal = ({ onAdd, onClose }) => {
  const [form, setForm] = useState({ filme: "", horario: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSessao = {
      ...form,
      price: parseFloat(form.price),
    };
    onAdd(newSessao);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-[#270707] p-6 rounded shadow-lg w-96">
        <h2 className="text-[#C0C0C0] font-bold mb-4">Adicionar Sessao</h2>

        <input 
          className="w-full border p-2 mb-2 bg-gray-200 rounded-lg" 
          placeholder="Filme" 
          value={form.filme} 
          onChange={e => setForm({ ...form, filme: e.target.value })} required 
        />

        <input 
          type="text" 
          className="w-full border p-2 mb-2 bg-gray-200 rounded-lg" 
          placeholder="Horario" value={form.horario} 
          onChange={e => setForm({ ...form, horario: e.target.value })} required 
        />

        <div className="flex justify-end gap-2">
          <button 
            onClick={onClose} 
            type="button" 
            className="bg-gray-400 hover:bg-gray-600 text-white hover:text-black px-4 py-2 rounded-lg cursor-pointer"
          >
              Cancelar
          </button>
          <button 
            type="submit" 
            className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white px-4 py-2 rounded-lg cursor-pointer"
            >
              Adicionar
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSessaoModal;

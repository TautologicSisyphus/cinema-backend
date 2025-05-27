import { useState, useEffect } from "react";

const EditProdutoModal = ({ product, onUpdate, onClose }) => {
  const [form, setForm] = useState(product);

  useEffect(() => {
    setForm(product);
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...form, price: parseFloat(form.price) });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleSubmit} className="bg-[#270707] p-6 rounded shadow-lg w-96">
        <h2 className="text-xl text-[#C0C0C0] font-bold mb-4">Editar Produto</h2>
        <input className="w-full border p-2 mb-2 bg-gray-200 rounded-lg" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
        <textarea className="w-full border p-2 mb-2 bg-gray-200 rounded-lg" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input type="number" className="w-full border p-2 mb-2 bg-gray-200 rounded-lg" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} required />
        <input className="w-full border p-2 mb-4 bg-gray-200 rounded-lg" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} required />
        <div className="flex justify-end gap-2">
          <button onClick={onClose} type="button" className="bg-gray-400 hover:bg-gray-600 text-white hover:text-black px-4 py-2 rounded-lg cursor-pointer">Cancelar</button>
          <button type="submit" className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white px-4 py-2 rounded-lg cursor-pointer">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default EditProdutoModal;

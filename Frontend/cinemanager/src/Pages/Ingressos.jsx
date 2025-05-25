import IngressoCard from "../Components/IngressoCard";
import { Link } from "react-router-dom";
import logo from "../assets/logoCineManager.png";
import { useState } from 'react';
import AddIngressoModal from '../Components/AddIngresso';
import EditIngressoModal from '../Components/EditIngresso';

const Ingressos = () => {

  const defaultIngressos = [
  {
    id: 1,
    name: 'Inteira',
    price: 23.00,
  },
  {
    id: 2,
    name: 'Meia',
    price: 11.50,
  },
  {
    id: 3,
    name: 'Dobradinha',
    price: 9.99,
  },
];

  const [ingressos, setIngressos] = useState(defaultIngressos);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIngresso, setEditingIngresso] = useState(null); 

  const handleEdit = (ingresso) => {
    setEditingIngresso(ingresso);
  };

  const handleAddNew = () => {
    setShowAddModal(true);
  };

  const handleDelete = (id) => {
    setIngressos(ingressos.filter(p => p.id !== id));
  };

    return (
    <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="flex justify-center mb-12">
        <Link to="/">
          <img src={logo} alt="CineManager" className="w-72 hover:scale-105 transition-all" />
        </Link>
      </div>

      <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#C0C0C0]">Lista de Ingressos Disponíveis</h1>
          <button onClick={handleAddNew} className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl px-4 py-2 cursor-pointer">
            Adicionar Ingressos
          </button>
        </div>

        {showAddModal && (
            <AddIngressoModal
              onAdd={(newIngresso) => setIngressos([...ingressos, newIngresso])}
              onClose={() => setShowAddModal(false)}
            />
          )}

        {editingIngresso && (
            <EditIngressoModal
                ingresso={editingIngresso}
                onUpdate={(updatedIngresso) => {
                    setIngressos(ingressos.map(p => p.id === updatedIngresso.id ? updatedIngresso : p));
                    setEditingIngresso(null);
                }}
                onClose={() => setEditingIngresso(null)}
            />
        )}

        {/* Lista de produtos */}
        <div className="flex flex-col gap-4 items-center">
            {ingressos.map((ingresso) => (
                <IngressoCard 
                key={ingresso.id} 
                ingresso={ingresso} 
                onEdit={handleEdit} 
                onDelete={handleDelete} 
                />
            ))}
        </div>
      </div>
    </div>
  );
};


export default Ingressos;

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchIngressos,
  addIngresso,
  updateIngresso,
  deleteIngresso,
  selectAllIngressos
} from '../Slices/IngressoSlice';

import IngressoCard from '../Components/IngressoCard';
import { Link } from 'react-router-dom';
import logo from '../assets/logoCineManager.png';
import AddIngressoModal from '../Components/AddIngresso';
import EditIngressoModal from '../Components/EditIngresso';

const Ingressos = () => {
  const dispatch = useDispatch();
  const ingressos = useSelector(selectAllIngressos);
  const status = useSelector((state) => state.ingressos.status);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingIngresso, setEditingIngresso] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIngressos());
    }
  }, [status, dispatch]);

  const getNextId = () => {
  if (ingressos.length === 0) return 1;
  return Math.max(...ingressos.map(i => Number(i.id))) + 1;
  };

  const handleAddNew = (newIngresso) => {
    const ingressoWithId = { ...newIngresso, id: getNextId() };
    dispatch(addIngresso(ingressoWithId));
    setShowAddModal(false);
  };

  const handleEdit = (ingresso) => {
    setEditingIngresso(ingresso);
  };

  const handleUpdate = (updatedIngresso) => {
    dispatch(updateIngresso(updatedIngresso));
    setEditingIngresso(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteIngresso(id));
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
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl px-4 py-2 cursor-pointer"
          >
            Adicionar Ingressos
          </button>
        </div>

        {showAddModal && (
          <AddIngressoModal onAdd={handleAddNew} onClose={() => setShowAddModal(false)} />
        )}

        {editingIngresso && (
          <EditIngressoModal
            ingresso={editingIngresso}
            onUpdate={handleUpdate}
            onClose={() => setEditingIngresso(null)}
          />
        )}

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

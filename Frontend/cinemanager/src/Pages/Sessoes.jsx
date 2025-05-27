import { Link } from "react-router-dom";
import logo from "../assets/logoCineManager.png"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchSessoes,
  addSessao,
  updateSessao,
  deleteSessao,
  selectAllSessoes
} from '../Slices/SessaoSlice';

import AddSessaoModal from '../Components/AddSessao';
import EditSessaoModal from '../Components/EditSessao';
import SessaoCard from '../Components/SessaoCard';

const Sessoes = () => {
    const [sessaoSelecionada, setSessaoSelecionada] = useState(false);
  
    

    const dispatch = useDispatch();
    const sessoes = useSelector(selectAllSessoes);
    const status = useSelector((state) => state.sessoes.status);

    const [showAddModal, setShowAddModal] = useState(false);
    const [editingSessao, setEditingSessao] = useState(null);

    useEffect(() => {
    if (status === 'idle') {
        dispatch(fetchSessoes());
    }
    }, [status, dispatch]);

    const getNextId = () => {
    if (sessoes.length === 0) return 1;
    return String(Math.max(...sessoes.map(i => Number(i.id))) + 1);
    };

    const handleAddNew = (newSessao) => {
    const sessaoWithId = { ...newSessao, id: getNextId() };
    dispatch(addSessao(sessaoWithId));
    setShowAddModal(false);
    };

    const handleEdit = (sessao) => {
    setEditingSessao(sessao);
    };

    const handleUpdate = (updatedSessao) => {
    dispatch(updateSessao(updatedSessao));
    setEditingSessao(null);
    };

    const handleDelete = (id) => {
    dispatch(deleteSessao(id));
    };
  
    const selecionarSessao = (idSessao) => {
      setSessaoSelecionada(idSessao);
    };
    
    return (
        <div className="min-h-screen flex flex-col items-center pt-40">
          <div className="flex justify-center mb-12">
                  <Link to="/">
                      <img src={logo} alt="CineManager" className="w-72 hover:scale-105 transition-all" />
                  </Link>
            </div>

            <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md"> 
                <div className="mb-10 text-center">
                    <h3 className="text-4xl font-bold text-[#C0C0C0]">Selecione uma Sessão</h3>
                </div>
                <ul className="space-y-2">
                    {sessoes.map((sessao) => (
                    <li
                        key={sessao.id}
                        onClick={() => selecionarSessao(sessao.id)}
                        className={`p-4 border rounded-lg cursor-pointer ${
                        sessaoSelecionada === sessao.id
                            ? "bg-blue-500 text-white"
                            : "bg-white hover:bg-gray-100"
                        }`}
                    >   
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <div className="font-semibold">{sessao.nome}</div>
                                <div className="text-sm text-gray-600">{sessao.horario}</div>
                            </div>
                            <Link to="/selecao-assentos" state={{ 
                                sessao: {
                                    nome: sessao.nome,
                                    id: sessao.id,
                                    horario: sessao.horario
                                }
                            }}>
                                <button className="bg-[#800F0F] hover:bg-red-800 text-white hover:text-black font-semibold py-1 px-4 rounded-xl cursor-pointer">
                                    Comprar Ingresso
                                </button>
                            </Link>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#C0C0C0]">Lista de Sessoes Disponíveis</h1>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl px-4 py-2 cursor-pointer"
                    >
                        Adicionar Sessoes
                    </button>
                </div>

                {showAddModal && (
                    <AddSessaoModal onAdd={handleAddNew} onClose={() => setShowAddModal(false)} />
                )}

                {editingSessao && (
                    <EditSessaoModal
                        sessao={editingSessao}
                        onUpdate={handleUpdate}
                        onClose={() => setEditingSessao(null)}
                    />
                )}

                <div className="flex flex-col gap-4 items-center">
                {sessoes.map((sessao) => (
                    <SessaoCard
                        key={sessao.id}
                        sessao={sessao}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
                </div>
            </div>
        </div>
      );
};

export default Sessoes;
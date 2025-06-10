import { useState,useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  fetchIngressos,
  selectAllIngressos
} from '../Slices/IngressoSlice';

import { useDispatch } from "react-redux";
import { addItem } from "../Slices/CartSlice";

export default function CompraIngressos() {
  const location = useLocation();
  const { quantidade, assentos } = location.state || {quantidade: 0, assentos: [] };
  

  // Pega todos os ingressos do estado global
  const status = useSelector((state) => state.ingressos.status);
  
  const ingressos = useSelector(selectAllIngressos);
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchIngressos());
    }
  }, [status, dispatch]);

  const [quantidades, setQuantidades] = useState({});

  const handleQuantidadeChange = (id, value) => {
    const val = parseInt(value) || 0;

    const somaSemAtual = Object.entries(quantidades).reduce((acc, [key, qtd]) => {
      return acc + (key === String(id) ? 0 : qtd);
    }, 0);

    if (somaSemAtual + val <= quantidade) {
      setQuantidades(prev => ({
        ...prev,
        [id]: val,
      }));
    }
  };

  const totalIngressosSelecionados = Object.values(quantidades).reduce((a, b) => a + b, 0);

  const totalPreco = ingressos.reduce((acc, ingresso) => {
    const qtd = quantidades[ingresso.id] || 0;
    return acc + ingresso.price * qtd;
  }, 0);

  const restante = quantidade - totalIngressosSelecionados;

  // Função para confirmar a compra e adicionar ao carrinho
  const confirmarCompra = () => {
    if (totalIngressosSelecionados !== quantidade || totalPreco === 0) return;

    const ingressosSelecionados = ingressos
      .filter(ing => quantidades[ing.id] > 0)
      .map(ing => ({
        id: ing.id,
        name: ing.name,
        price: ing.price,
        quantity: quantidades[ing.id],
      }));

    ingressosSelecionados.forEach(item => {
      dispatch(addItem(item));
    });
  };
  return (
    <div className="max-w-md mx-auto p-6 space-y-6 mt-50 bg-[#270707] rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#C0C0C0]">Compra de Ingressos</h1>

      <p className="text-center text-[#C0C0C0] mb-4">
        Você selecionou <strong>{quantidade}</strong> assento{quantidade > 1 ? "s" : ""}: {assentos.join(", ")}
      </p>

      <div className="space-y-4">
        
        {ingressos.map((ingresso) => (
          <div key={ingresso.id} className="flex items-center justify-between">
            <label className="text-lg text-[#C0C0C0]">
              {ingresso.name} (R$ {ingresso.price}):
            </label>
            <input
              type="number"
              min={0}
              max={quantidade - totalIngressosSelecionados + (quantidades[ingresso.id] || 0)}
              value={quantidades[ingresso.id] || 0}
              onChange={(e) => handleQuantidadeChange(ingresso.id, e.target.value)}
              className="w-20 px-2 py-1 border rounded text-center text-[#C0C0C0] bg-transparent"
            />
          </div>
        ))}

        <div className="mt-4 border-t pt-4 text-lg text-[#C0C0C0]">
          <p><strong>Total:</strong> R$ {totalPreco.toFixed(2)}</p>
          <p><strong>Restante:</strong> {restante >= 0 ? restante : 0} ingresso(s)</p>
        </div>

        <Link to="/alimentos">
          <button
            onClick={confirmarCompra}
            disabled={totalIngressosSelecionados !== quantidade || totalPreco === 0}
            className={`w-full mt-4 py-2 px-4 rounded text-white font-medium transition-colors cursor-pointer
              ${totalIngressosSelecionados !== quantidade || totalPreco === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          >
            Confirmar Compra
          </button>
        </Link>
      </div>
    </div>
  );
}


import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function CompraIngressos() {
  const location = useLocation();
  const { quantidade = 0, assentos = [] } = location.state || {};

  const [inteiras, setInteiras] = useState(0);
  const [meias, setMeias] = useState(0);

  const precoInteira = 20;
  const precoMeia = 10;

  const total = inteiras * precoInteira + meias * precoMeia;
  const totalIngressos = inteiras + meias;
  const restante = quantidade - totalIngressos;

  const handleInteirasChange = (value) => {
    const val = parseInt(value) || 0;
    if (val + meias <= quantidade) {
      setInteiras(val);
    }
  };

  const handleMeiasChange = (value) => {
    const val = parseInt(value) || 0;
    if (val + inteiras <= quantidade) {
      setMeias(val);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 mt-50 bg-[#270707] rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#C0C0C0]">Compra de Ingressos</h1>

      <p className="text-center text-[#C0C0C0] mb-4">
        Você selecionou <strong>{quantidade}</strong> assento{quantidade > 1 ? "s" : ""}: {assentos.join(", ")}
      </p>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-lg text-[#C0C0C0]">Inteiras (R$ {precoInteira}):</label>
          <input
            type="number"
            min={0}
            max={quantidade - meias}
            value={inteiras}
            onChange={(e) => handleInteirasChange(e.target.value)}
            className="w-20 px-2 py-1 border rounded text-center text-[#C0C0C0] bg-transparent"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-lg text-[#C0C0C0]">Meias (R$ {precoMeia}):</label>
          <input
            type="number"
            min={0}
            max={quantidade - inteiras}
            value={meias}
            onChange={(e) => handleMeiasChange(e.target.value)}
            className="w-20 px-2 py-1 border rounded text-center text-[#C0C0C0] bg-transparent"
          />
        </div>

        <div className="mt-4 border-t pt-4 text-lg text-[#C0C0C0]">
          <p><strong>Total:</strong> R$ {total}</p>
          <p><strong>Restante:</strong> {restante >= 0 ? restante : 0} ingresso(s)</p>
        </div>

        <button
          disabled={totalIngressos !== quantidade || total === 0}
          className={`w-full mt-4 py-2 px-4 rounded text-white font-medium transition-colors cursor-pointer
            ${totalIngressos !== quantidade || total === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
}

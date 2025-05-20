import { useState } from "react";

export default function TelaCompraIngressos() {
  const [inteiras, setInteiras] = useState(0);
  const [meias, setMeias] = useState(0);

  const precoInteira = 20;
  const precoMeia = 10;

  const total = inteiras * precoInteira + meias * precoMeia;

  return (
    <div className="max-w-md mx-auto p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#C0C0C0]">Compra de Ingressos</h1>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-lg text-[#C0C0C0]">Inteiras (R$ {precoInteira}):</label>
          <input
            type="number"
            min={0}
            value={inteiras}
            onChange={(e) => setInteiras(parseInt(e.target.value) || 0)}
            className="w-20 px-2 py-1 border rounded text-center text-[#C0C0C0]"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="text-lg text-[#C0C0C0]">Meias (R$ {precoMeia}):</label>
          <input
            type="number"
            min={0}
            value={meias}
            onChange={(e) => setMeias(parseInt(e.target.value) || 0)}
            className="w-20 px-2 py-1 border rounded text-center text-[#C0C0C0]"
          />
        </div>

        <div className="mt-4 border-t pt-4 text-lg text-[#C0C0C0]">
          <p><strong>Total:</strong> R$ {total}</p>
        </div>

        <button
          disabled={total === 0}
          className={`w-full mt-4 py-2 px-4 rounded text-white font-medium transition-colors 
            ${total === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          Confirmar Compra
        </button>
      </div>
    </div>
  );
}

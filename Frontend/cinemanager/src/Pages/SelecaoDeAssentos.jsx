import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoCineManager.png"

const SelecaoDeAssentos = ({ sessao = { nome: 'FILME' } }) => {
  const [assentosSelecionados, setAssentosSelecionados] = useState([]);

  const linhas = ["A", "B", "C", "D", "E", "F"];
  const colunas = Array.from({ length: 10 }, (_, i) => i + 1);

  // Exemplo de assentos ocupados
  const ocupados = ["A3", "B7", "C1", "D5", "E2", "F10"];

  const alternarAssento = (id) => {
    if (ocupados.includes(id)) return;
    setAssentosSelecionados((atual) =>
      atual.includes(id)
        ? atual.filter((a) => a !== id)
        : [...atual, id]
    );
  };

  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-xl font-bold mb-6 text-[#C0C0C0]">
        {/*Escolha seus assentos para o filme <span className="italic">{sessao.nome}</span>*/}
        Escolha seus assentos para o filme
      </h2>
      <div className="space-y-3">
        {linhas.map((linha) => (
          <div key={linha} className="flex justify-center space-x-2">
            {colunas.map((coluna) => {
              const id = `${linha}${coluna}`;
              const isSelecionado = assentosSelecionados.includes(id);
              const isOcupado = ocupados.includes(id);

              return (
                <div
                  key={id}
                  onClick={() => alternarAssento(id)}
                  className={`w-10 h-10 flex items-center justify-center rounded text-sm font-medium cursor-pointer
                    ${
                      isOcupado
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : isSelecionado
                        ? "bg-green-500 text-white"
                        : "bg-white border hover:bg-blue-200"
                    }`}
                >
                  {id}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <Link to={'/ingressos'}> 
        <button
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() =>
            alert(`Assentos selecionados: ${assentosSelecionados.join(", ")}`)
          }
        >
          Confirmar Seleção
        </button>
      </Link>
    </div>
  );
};

export default SelecaoDeAssentos;

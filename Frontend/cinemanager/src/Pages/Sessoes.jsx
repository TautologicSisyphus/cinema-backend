import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logoCineManager.png"

function Sessoes() {
    const [sessaoSelecionada, setSessaoSelecionada] = useState(false);
  
    const sessoes = [
      { id: 1, nome: "John Wick", horario: "18:00" },
      { id: 2, nome: "O Retorno", horario: "19:30" },
      { id: 3, nome: "Ad astra", horario: "21:00" },
    ];
  
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
        </div>
      );
}

export default Sessoes;
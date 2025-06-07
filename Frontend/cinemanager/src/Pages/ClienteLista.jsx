import { useEffect, useState } from "react";
import Header from "../Components/Header";

function ClientLista() {
  const [clients, setClients] = useState([]);

  // Buscar dados da API
  useEffect(() => {
    fetch("http://localhost:3001/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Erro ao buscar clientes:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12">
     
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

    
      <div className="w-full max-w-5xl mt-24">
        <h1 className="text-4xl font-bold text-center text-[#C0C0C0] mb-8">
          Lista de Clientes
        </h1>

        {clients.length === 0 ? (
          <p className="text-center text-white">Nenhum cliente cadastrado.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-400">
              <thead className="text-xs uppercase bg-[#270707] text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Nome</th>
                  <th scope="col" className="px-6 py-3">CPF</th>
                  <th scope="col" className="px-6 py-3">Email</th>
                  <th scope="col" className="px-6 py-3">Nascimento</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((client) => (
                  <tr key={client.id} className="border-b border-gray-700 bg-[#1c1c1c]">
                    <td className="px-6 py-4">{client.nome}</td>
                    <td className="px-6 py-4">{client.cpf}</td>
                    <td className="px-6 py-4">{client.email}</td>
                    <td className="px-6 py-4">{client.nascimento}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default ClientLista;

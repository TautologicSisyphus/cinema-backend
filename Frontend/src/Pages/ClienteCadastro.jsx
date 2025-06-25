import { Link } from "react-router-dom"
import logo from "../assets/logoCineManager.png"
import Header from '../Components/Header';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClientCadastro() {

    const navigate = useNavigate();
    
    // Estado do formulário
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    email: "",
    nascimento: "",
  });

  // Estado para mensagem (sucesso / erro)
  const [message, setMessage] = useState(null);

  // Atualiza o estado quando o usuário digita
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Envia os dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/clients", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erro ao salvar cliente");

      setMessage("Cliente cadastrado com sucesso!");
      // Limpar o formulário
      setFormData({ nome: "", cpf: "", email: "", nascimento: "" });

      setTimeout(() => {
      setMessage(null);
      navigate("/cliente-lista");
    }, 2000);
    } catch (error) {
      setMessage("Erro ao cadastrar cliente.");
      console.error(error);
    }
  };

    return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <div className="w-full max-w-lg bg-[#270707] rounded-2xl shadow-2xl p-10 mt-15">
        <h3 className="text-3xl font-bold text-center text-[#C0C0C0] mb-8">Cadastrar Cliente</h3>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Nome completo</label>
            <input
              name="nome"
              type="text"
              placeholder="Nome completo"
              className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">CPF</label>
            <input
              name="cpf"
              type="text"
              placeholder="CPF"
              className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
              value={formData.cpf}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#C0C0C0] mb-1">Data de nascimento</label>
            <input
              name="nascimento"
              type="date"
              className="w-full p-3 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-red-900"
              value={formData.nascimento}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-5 bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl transition-all focus:ring-2 focus:ring-gray-600 cursor-pointer"
          >
            Cadastrar
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-white">{message}</p>
        )}
      </div>
    </div>
  );
}

export default ClientCadastro;

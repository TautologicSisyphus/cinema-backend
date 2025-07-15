import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logoCineManager.png"
import { useNavigate } from "react-router-dom";

function Register() {

    const [showPassword, setShowPassword] = useState(false);

  // 👉 estados para capturar o input do usuário
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // se quiser escolher o cargo (funcionario ou gerente)
  const [role, setRole] = useState("funcionario");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // 👉 função para enviar ao backend
  const handleRegister = async (e) => {
    e.preventDefault(); // impede o reload do form
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:3001/authenticate/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.msg || "Erro ao registrar");
        return;
      }

      // se deu certo
      setSuccess("Usuário registrado com sucesso!");
      // opcional: redireciona para a tela de login
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      console.error(err);
      setError("Erro de conexão com o servidor");
    }
  };

     return (
    <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="flex justify-center mb-12">
        <Link to="/">
          <img
            src={logo}
            alt="CineManager"
            className="w-72 hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="max-w-lg w-full p-8 bg-[#270707] rounded-xl shadow-md">
        <div className="mb-10 text-center">
          <h3 className="text-4xl font-bold text-[#C0C0C0]">Registrar-se</h3>
        </div>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block mb-2 font-semibold text-sm text-[#C0C0C0]">
              Nome de usuário
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nome de usuário"
                className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-gray-600"
              />
              <i className="bx bx-user bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-sm text-[#C0C0C0]">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                className="w-full p-3 pl-4 pr-10 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-gray-600"
              />
              <i
                className={`bx ${showPassword ? "bx-show" : "bx-hide"} bx-sm absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer`}
                onClick={togglePassword}
              ></i>
            </div>
          </div>

          {/* Se quiser permitir escolher o papel */}
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-sm text-[#C0C0C0]">
              Cargo
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-200 outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="funcionario">Funcionário</option>
              <option value="gerente">Gerente</option>
            </select>
          </div>

          {error && <p className="text-red-500 mb-4">{error}</p>}
          {success && <p className="text-green-500 mb-4">{success}</p>}

          <button
            type="submit"
            className="w-full p-3 mt-5 bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl transition-all focus:ring-2 focus:ring-gray-600 cursor-pointer"
          >
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

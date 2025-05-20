
const addToCart = (ingresso) => {
    //setCart([...cart, { name: product.name, price: product.price }]);
    alert(`ingresso adicionado ao carrinho!`);
  };

const Ingresso = ({ ingresso, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-[#F5F5F5]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ingresso.name}</div>
        <p className="text-sm text-gray-500 mt-2">ID: {ingresso.id}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          R${ingresso.price}
        </span>
        <button onClick={() => addToCart(ingresso)} className="bg-[#800F0F] hover:bg-red-800 text-white hover:text-black font-semibold py-1 px-4 rounded-xl mr-2 cursor-pointer">
          Comprar
        </button>
        <button 
            onClick={() => onEdit(ingresso)} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white hover:text-black font-semibold py-1 px-3 rounded-xl mr-10 cursor-pointer"
          >
            Editar
        </button>
        <button 
            onClick={() => onDelete(ingresso.id)} 
            className="text-red-600 text-xl cursor-pointer"
          >
            <i className='bx bx-trash bx-tada-hover'></i>
        </button>
      </div>
    </div>
  );
};

export default Ingresso;

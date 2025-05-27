const IngressoCard = ({ ingresso, onEdit, onDelete }) => {
  return (
    <div className="flex flex-row items-center justify-between w-full max-w-3xl rounded-xl shadow-md p-4 bg-[#F5F5F5]">
      <div>
        <h2 className="font-bold text-xl">{ingresso.name}</h2>
        <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mt-2">
          R${ingresso.price}
        </span>
        <button 
          onClick={() => onEdit(ingresso)} 
          className="bg-yellow-500 hover:bg-yellow-600 text-white hover:text-black font-semibold py-1 px-4 rounded-full cursor-pointer ml-4"
        >
          Editar
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => onDelete(ingresso.id)} 
          className="text-red-600 text-2xl cursor-pointer"
        >
          <i className='bx bx-trash bx-tada-hover'></i>
        </button>
      </div>
    </div>
  );
};

export default IngressoCard;

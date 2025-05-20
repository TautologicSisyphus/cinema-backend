
const addToCart = (product) => {
    //setCart([...cart, { name: product.name, price: product.price }]);
    alert(`${product.name} adicionado ao carrinho!`);
  };

const ProductCard = ({ product, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-4 bg-[#F5F5F5]">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-sm text-gray-500 mt-2">ID: {product.id}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center">
        <span className="inline-block bg-black rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          R${product.price}
        </span>
        <button onClick={() => addToCart(product)} className="bg-[#800F0F] hover:bg-red-800 text-white hover:text-black font-semibold py-1 px-4 rounded-xl mr-2 cursor-pointer">
          Comprar
        </button>
        <button 
            onClick={() => onEdit(product)} 
            className="bg-yellow-500 hover:bg-yellow-600 text-white hover:text-black font-semibold py-1 px-3 rounded-xl mr-10 cursor-pointer"
          >
            Editar
        </button>
        <button 
            onClick={() => onDelete(product.id)} 
            className="text-red-600 text-xl cursor-pointer"
          >
            <i className='bx bx-trash bx-tada-hover'></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

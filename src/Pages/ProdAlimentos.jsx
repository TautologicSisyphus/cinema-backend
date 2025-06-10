import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  selectAllProducts
} from '../Slices/ProductsSlice';

import ProductCard from '../Components/ProductCard';
import Header from '../Components/Header';
import { useState, useEffect } from 'react';
import AddProdutoModal from '../Components/AddProduto';
import EditProdutoModal from '../Components/EditProduto';

function ProdAlimentos() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts); 
  const status = useSelector(state => state.products.status);
 
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null); 

   useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const getNextId = () => {
    if (products.length === 0) return 1;
    return String(Math.max(...products.map(p => Number(p.id))) + 1);
  };

  const handleAddNew = (newProduct) => {
    const productWithId = { ...newProduct, id: getNextId() };
    dispatch(addProduct(productWithId));
    setShowAddModal(false);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleUpdate = (updatedProduct) => {
    dispatch(updateProduct(updatedProduct));
    setEditingProduct(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-40">
      <div className="flex justify-center mb-12">
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>
      </div>
      
      <div className="container mx-auto p-10 bg-[#270707] rounded-xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-[#C0C0C0]">Lista de Produtos</h1>
          <button 
            onClick={() => setShowAddModal(true)} 
            className="bg-[#800F0F] hover:bg-red-800 hover:text-black text-white font-semibold rounded-xl px-4 py-2 cursor-pointer">
            Adicionar Produto
          </button>
        </div>

        {showAddModal && (
              <AddProdutoModal
                onAdd={handleAddNew}
                onClose={() => setShowAddModal(false)}
              />
            )}

            {editingProduct && (
              <EditProdutoModal
                product={editingProduct}
                onUpdate={handleUpdate}
                onClose={() => setEditingProduct(null)}
              />
            )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProdAlimentos;

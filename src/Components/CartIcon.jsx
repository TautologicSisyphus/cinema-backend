import { useSelector } from 'react-redux';

const CartIcon = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <div className="relative">
      <span className="material-icons text-3xl">
        <img
                src="https://static.vecteezy.com/system/resources/thumbnails/024/095/178/small_2x/shopping-cart-market-free-png.png"
                className="w-8 h-8 object-contain"
                alt="Cart"
            /></span>
      {totalQuantity > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs">
          {totalQuantity}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
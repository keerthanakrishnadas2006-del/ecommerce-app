import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Your Cart 🛒
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-3">
                <span className="text-lg">{item.name} — ₹{item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Cart;

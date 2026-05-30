import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { supabase } from "../supabaseClient";

function Checkout() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const placeOrder = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { error } = await supabase.from("orders").insert([
    {
      user_id: user?.id, // link order to logged-in user
      items: cart,
      total: total,
    },
  ]);

  if (error) {
    console.error("Error placing order:", error);
    alert("Failed to place order.");
  } else {
    alert("Order placed successfully!");
  }
};


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
        Checkout 💳
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between py-3">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-6 text-xl font-semibold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;

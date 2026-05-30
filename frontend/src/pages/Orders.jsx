import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching orders:", error);
  } else {
    setOrders(data);
  }
};

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
        Order History 📦
      </h2>

      {orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <ul className="divide-y divide-gray-200">
            {orders.map((order) => (
              <li key={order.id} className="py-4">
                <p className="font-semibold">Order #{order.id}</p>
                <p>Total: ₹{order.total}</p>
                <p>Date: {new Date(order.created_at).toLocaleString()}</p>
                <pre className="bg-gray-100 p-2 rounded mt-2 text-sm">
                  {JSON.stringify(order.items, null, 2)}
                </pre>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Orders;

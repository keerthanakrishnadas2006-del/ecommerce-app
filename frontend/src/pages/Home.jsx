import { useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import { CartContext } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Product Catalog 🛍️
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-2">₹{p.price}</p>
            <p className="text-sm text-gray-500 mb-4">Stock: {p.stock}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

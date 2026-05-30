import { Link } from "react-router-dom";
import Logout from "./Logout";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6">
      <Link to="/" className="hover:text-yellow-300">Home</Link>
      <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
      <Link to="/checkout" className="hover:text-yellow-300">Checkout</Link>
      <Link to="/orders" className="hover:text-yellow-300">Orders</Link>
      <Link to="/login" className="hover:text-yellow-300">Login</Link>
      <Logout />
    </nav>
  );
}

export default Navbar;

import { Navigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };
    checkUser();
  }, []);

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../authentication/auth";

const Home = () => {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
      // Handle errors, e.g., display an error message to the user
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user ? (
        <>
          <p className="text-2xl font-semibold mb-4">Welcome, {user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </>
      ) : (
        <p className="text-center mt-4">User not logged in.</p>
      )}
    </div>
  );
};

export default Home;

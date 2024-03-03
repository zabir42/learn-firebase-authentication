import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Navigation Bar */}
        <Sidebar />

        {/* Page Content */}
        <div className="w-5/6 p-4">
          {/* Dynamic Content (Routes) */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

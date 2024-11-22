import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BackgroundVideo from "./components/BackgroundVideo";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const handleLogin = (user: string) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  return (
    <Router>
      <div className="relative min-h-screen">
        <BackgroundVideo />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/dashboard"
              element={
                <AppRoute isAuthenticated={isAuthenticated}>
                  <Dashboard username={username || ""} />
                </AppRoute>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

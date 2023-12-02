import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const User = React.lazy(() => import("./pages/User"));

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<User />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        {user !== "" ? <Navigate to="/home" /> : <Navigate to="/user" />}
      </BrowserRouter>
    </React.Suspense>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Header />
      <Toaster position="top-right" reverseOrder={false} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;

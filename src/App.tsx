import React from "react";
import Header from "./layout/header/Header";
import AppRoutes from "./routes/Routes";
import { HashRouter as Router } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import { QuakeProvider } from "./context/AppLevelContext";

const App: React.FC = () => {
  return (
    <Router>
      <QuakeProvider>
        <div className="w-5/6 sm:w-3/4 lg:w-3/5 min-h-screen mx-auto">
          <Header />
          <AppRoutes />
          <Footer />
          <Navbar />
        </div>
      </QuakeProvider>
    </Router>
  );
};

export default App;

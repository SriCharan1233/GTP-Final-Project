import React from "react";
import Carosal from "./Carosal";
import Dashboard from "./Dashboard";
import Footer from "./Footer";


function Home(props) {
  return (
    <div>
      <Dashboard />
      <Carosal />
      <Footer/>
    </div>
  );
}

export default Home;

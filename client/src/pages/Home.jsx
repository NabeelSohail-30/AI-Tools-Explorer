import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Home Page</h1>
          <p className="text-lg">This is the Home page.</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;

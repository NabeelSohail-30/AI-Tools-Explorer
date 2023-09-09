import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Explorer = () => {
  return (
    <>
      <Header></Header>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Explorer</h1>
          <p className="text-lg">This is the Explorer page.</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explorer;

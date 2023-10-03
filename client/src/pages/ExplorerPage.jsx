import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";
// import { useState } from "react";

const Explorer = () => {
  // const [tools, setTools] = useState([]);
  
  const tool = {
    _id: "1",
    name: "Tool Name",
    description: "Tool Description",
  };

  return (
    <>
      <Header></Header>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Explorer</h1>
          <p className="text-lg">This is the Explorer page.</p>
        </div>
        <ToolCard key={tool._id} tool={tool} />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Explorer;

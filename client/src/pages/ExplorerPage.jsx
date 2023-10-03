import React from "react";
import { useState, useEffect } from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ToolCard from "../components/ToolCard";

const Explorer = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // Fetch tools from the server when the component mounts
    fetch("http://localhost:8080/tools")
      .then((response) => response.json())
      .then((data) => {
        setTools(data.data);
      })
      .catch((error) => console.error("Error fetching tools:", error));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4">Explorer</h1>
          <p className="text-lg">This is the Explorer page.</p>
        </div>
      </div>
      {tools.map((tool) => (
        <ToolCard key={tool._id} tool={tool} /> // Pass the tool data to ToolCard
      ))}{" "}
      <Footer></Footer>
    </>
  );
};

export default Explorer;

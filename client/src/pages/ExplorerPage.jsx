import React, { useState, useEffect } from "react";
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
      <Header />
      <div className="container mx-auto mt-8 px-4 my-5">
        <h1 className="text-4xl font-semibold mb-4 text-center">Explorer</h1>
        <p className="text-lg text-center">This is the Explorer page.</p>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool._id} tool={tool} /> // Pass the tool data to ToolCard
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Explorer;

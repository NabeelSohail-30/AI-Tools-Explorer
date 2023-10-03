import React from "react";

const ToolCard = ({ tool }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">{tool.name}</h2>
        <p className="text-gray-600 mt-2">{tool.description}</p>
      </div>
    </div>
  );
};

export default ToolCard;

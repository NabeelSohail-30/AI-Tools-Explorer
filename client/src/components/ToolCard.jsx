import React, { useState } from "react";

const ToolCard = ({ tool }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {tool.name}
      </h5>
      <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
        {tool.category}
      </p>
      <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">{`Owner: ${tool.owner}`}</p>
      <div className="mb-3">
        <button
          onClick={toggleModal}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Details
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="z-50 bg-white p-6 rounded-lg max-w-2xl overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{tool.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {tool.category}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Owner:</strong> {tool.owner}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Description:</strong> {tool.description}
            </p>
            <p
              className="text-blue-700 hover:underline cursor-pointer"
              onClick={toggleModal}
            >
              Close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;

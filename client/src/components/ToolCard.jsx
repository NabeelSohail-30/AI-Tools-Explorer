import React, { useState, useRef } from "react";

const ToolCard = ({ tool }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const redirectToTool = () => {
    window.open(tool.link, "_blank"); // Open the link in a new tab
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      toggleModal();
    }
  };

  return (
    <div className="max-w-md h-full flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex-grow p-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {tool.name}
        </h5>
        <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {tool.category}
        </p>
        <p className="mb-1 text-sm font-medium text-gray-600 dark:text-gray-400">{`Owner: ${tool.owner}`}</p>
        <div className="mb-3"></div>
      </div>
      <div className="flex justify-center p-3">
        <button
          onClick={toggleModal}
          className="mr-2 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          View Details
        </button>
        <button
          onClick={redirectToTool}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go to Tool
        </button>
      </div>
      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div
            ref={modalRef}
            className="z-50 bg-white p-6 rounded-lg max-w-2xl overflow-y-auto"
          >
            <div className="flex justify-end">
              <button
                onClick={toggleModal}
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
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
            <div className="flex justify-center mt-4">
              <button
                onClick={redirectToTool}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Go to Tool
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToolCard;

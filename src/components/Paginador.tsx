import React from "react";

const Paginador = () => {
  return (
    <div className="flex justify-center mt-4">
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 7.293a1 1 0 011.414 0L12 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          1
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          2
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          3
        </a>
        <span className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red">
          ...
        </span>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          8
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          9
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          10
        </a>
        <a
          href="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-red bg-white text-sm font-medium text-red hover:bg-gray-50"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 12.707a1 1 0 01-1.414 0L8 9.414l-3.293 3.293a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </nav>
    </div>
  );
};

export default Paginador;

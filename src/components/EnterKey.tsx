import React from "react";

interface EnterKeyProps {
  index: string;
}

export const EnterKey: React.FC<EnterKeyProps> = ({index}) => {
  return <button
    key={index}
    className="bg-gray-800 text-white text-sm p-2 m-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-all"
  >
    Enter
  </button>
}

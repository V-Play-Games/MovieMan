import React from "react";

interface BackspaceKeyProps {
  index: string;
}

export const BackspaceKey: React.FC<BackspaceKeyProps> = ({index}) => {
  return (
    <button
      key={index}
      className="bg-gray-800 text-white material-symbols-outlined p-2 m-1 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 animate-all"
    >
      backspace
    </button>
  )
}

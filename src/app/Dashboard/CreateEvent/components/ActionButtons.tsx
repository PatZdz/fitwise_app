import React from 'react';  // Add React import

interface ActionButtonsProps {
  onClear: () => void;
  onSubmit: () => void;
}

export default function ActionButtons({ onClear, onSubmit }: ActionButtonsProps) {
  return (
    <div className="flex gap-3 pt-2">
      <button 
        onClick={onClear}
        className="flex-1 h-9 px-4 border border-gray-200 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        Wyczyść
      </button>
      <button 
        onClick={onSubmit}
        className="flex-1 h-9 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Stwórz
      </button>
    </div>
  );
}
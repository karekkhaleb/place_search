import React from 'react';

const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-16">
      <div className="relative w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6">
        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-400 text-base sm:text-lg">Searching for places...</p>
    </div>
  );
};

export default LoadingState;

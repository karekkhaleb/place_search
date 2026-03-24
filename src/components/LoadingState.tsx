const LoadingState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative w-16 h-16 mb-6">
        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
      <p className="text-gray-400 text-lg">Searching for places...</p>
    </div>
  );
};

export default LoadingState;

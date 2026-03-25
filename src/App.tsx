import React from 'react';
import { Place } from './types';
import SearchForm from './components/SearchForm';
import ResultsGrid from './components/ResultsGrid';
import LoadingState from './components/LoadingState';
import PlaceDetailSidebar from './components/PlaceDetailSidebar';
import usePlaceSearch from './hooks/usePlaceSearch';

const App: React.FC = () => {
  const { results, isLoading, error, search } = usePlaceSearch();
  const [selectedPlace, setSelectedPlace] = React.useState<Place | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <PlaceDetailSidebar
        place={selectedPlace}
        onClose={() => setSelectedPlace(null)}
      />
      
      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Place Search
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Search for restaurants, cafes, shops, and more.
          </p>
        </header>

        <SearchForm onSearch={search} isLoading={isLoading} />

        <main className="mt-12">
          {error && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-900/30 border border-red-800 rounded-xl text-red-300 text-center">
              {error}
            </div>
          )}

          {isLoading ? (
            <LoadingState />
          ) : (
            <ResultsGrid results={results} onPlaceSelect={setSelectedPlace} />
          )}
        </main>

        <footer className="mt-16 text-center text-gray-500 text-sm space-y-2">
          <p>Copyright &copy; {new Date().getFullYear()} Karekezi Caleb Buhungiro. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <a href="https://bcaleb.fun" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              Learn more about me
            </a>
            <span>|</span>
            <a href="https://www.linkedin.com/in/buhungiro-caleb-622016149/" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

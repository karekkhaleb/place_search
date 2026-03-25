import React from 'react';
import { Place } from '../types';
import PlaceCard from './PlaceCard';

interface ResultsGridProps {
  results: Place[];
  onPlaceSelect: (place: Place) => void;
}

const ResultsGrid: React.FC<ResultsGridProps> = ({ results, onPlaceSelect }) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 sm:py-16">
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-800 rounded-full mb-4 sm:mb-6">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-300 mb-2">No places found</h3>
        <p className="text-gray-500 text-sm sm:text-base">Try adjusting your search or exploring different locations.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-0">
      <p className="text-gray-400 mb-4 sm:mb-6 text-center text-sm sm:text-base">
        Found <span className="text-emerald-400 font-semibold">{results.length}</span> {results.length === 1 ? 'place' : 'places'}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {results.map((place, index) => (
          <PlaceCard
            key={index}
            place={place}
            onClick={() => onPlaceSelect(place)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;

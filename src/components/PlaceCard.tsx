import React from 'react';
import { Place } from '../types';

interface PlaceCardProps {
  place: Place;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place }) => {
  const isOpen = place.opening_hours?.open_now;
  const priceDisplay = place.price_level ? '$'.repeat(place.price_level) : 'N/A';

  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-emerald-900/20">
      <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
        <img
          src={place.icon}
          alt={place.name}
          className="w-16 h-16 opacity-50"
        />
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-white truncate pr-2">{place.name}</h3>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
              isOpen
                ? 'bg-emerald-900/50 text-emerald-400'
                : 'bg-red-900/50 text-red-400'
            }`}
          >
            {isOpen ? 'Open' : 'Closed'}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-4 flex items-start gap-2">
          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="line-clamp-2">{place.formatted_address}</span>
        </p>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-white font-medium">{place.rating || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-emerald-400 font-medium">{priceDisplay}</span>
          </div>
          <div className="text-gray-500 text-sm">
            {place.types?.[0] && (
              <span className="capitalize">{place.types[0].replace(/_/g, ' ')}</span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {place.types?.slice(0, 4).map((type, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md capitalize"
            >
              {type.replace(/_/g, ' ')}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;

import React from 'react';
import { Place } from '../types';

interface PlaceCardProps {
  place: Place;
  onClick: () => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 transition-all duration-300 cursor-pointer hover:ring-2 hover:ring-emerald-500/50"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-base font-semibold text-white truncate pr-2">
          {place.displayName.text}
        </h3>
        {place.rating && (
          <div className="flex items-center gap-1 bg-yellow-900/30 px-2 py-1 rounded-full flex-shrink-0">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-white text-xs font-medium">{place.rating}</span>
          </div>
        )}
      </div>

      <p className="text-gray-400 text-xs mb-2 line-clamp-1">
        {place.formattedAddress}
      </p>

      {place.internationalPhoneNumber && (
        <p className="text-gray-500 text-xs truncate">
          {place.internationalPhoneNumber}
        </p>
      )}
    </div>
  );
};

export default PlaceCard;

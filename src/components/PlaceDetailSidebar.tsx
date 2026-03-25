import React, { useEffect, useState } from 'react';
import { Place } from '../types';

interface PlaceDetailSidebarProps {
  place: Place | null;
  onClose: () => void;
}

interface DetailRowProps {
  label: string;
  value: string;
  onCopy: (value: string) => void;
  isLink?: boolean;
}

const DetailRow: React.FC<DetailRowProps> = ({ label, value, onCopy, isLink }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    onCopy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3 py-3 border-b border-gray-700 last:border-b-0 group hover:bg-gray-700/50 transition-colors rounded-lg px-2 sm:px-0">
      <span className="text-gray-400 text-sm w-full sm:w-24 flex-shrink-0">{label}</span>
      <div className="flex-1 min-w-0 flex items-start gap-2 w-full">
        <div className="flex-1 min-w-0">
          {isLink ? (
            <a
              href={value}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 break-all hover:underline text-sm sm:text-base"
            >
              {value}
            </a>
          ) : (
            <span className="text-white break-all text-sm sm:text-base">{value}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-1.5 text-gray-500 hover:text-emerald-400 hover:bg-gray-600 rounded transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

const PlaceDetailSidebar: React.FC<PlaceDetailSidebarProps> = ({ place, onClose }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setToastMessage('Copied to clipboard!');
    setTimeout(() => setToastMessage(null), 1500);
  };

  if (!place) return null;

  const details: { label: string; value: string; isLink?: boolean }[] = [
    { label: 'Name', value: place.displayName.text },
    { label: 'Address', value: place.formattedAddress },
  ];

  if (place.internationalPhoneNumber) {
    details.push({ label: 'Phone', value: place.internationalPhoneNumber });
  }
  if (place.rating !== undefined) {
    details.push({ label: 'Rating', value: place.rating.toString() });
  }
  if (place.websiteUri) {
    details.push({ label: 'Website', value: place.websiteUri, isLink: true });
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-gray-800 shadow-2xl flex flex-col overflow-hidden border-l border-gray-700 z-50">
        <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gray-800">
          <h2 className="text-base sm:text-lg font-semibold text-white truncate pr-4">
            {place.displayName.text}
          </h2>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {details.map((detail, index) => (
            <DetailRow
              key={index}
              label={detail.label}
              value={detail.value}
              onCopy={handleCopy}
              isLink={detail.isLink}
            />
          ))}
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-850">
          <p className="text-gray-500 text-sm text-center">
            Click the copy icon next to any value
          </p>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-lg z-[60] animate-fade-in">
          {toastMessage}
        </div>
      )}
    </>
  );
};

export default PlaceDetailSidebar;

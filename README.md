# Place Search App

A modern, dark-themed React application that allows users to search for places (restaurants, cafes, shops, etc.) using the Google Places API via an n8n webhook integration.

## Overview

This application provides a clean interface for searching places. It communicates with a backend n8n service which internally calls the Google Places API. Due to Google's API rate limits, there is a required 3-second delay between consecutive API calls, so please expect slightly longer response times.

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Language**: TypeScript

## Features

- Dark mode design with emerald accent colors
- Responsive grid layout for search results
- Detailed sidebar panel with place information
- Copy-to-clipboard functionality for all place details
- Loading states and error handling
- Keyboard accessibility (Escape to close sidebar)

## API Information

### Endpoint

The application uses an n8n webhook service that acts as a proxy to the Google Places API.

- **Webhook URL**: Configured via `VITE_API_URL` environment variable
- **Method**: POST
- **Authentication**: Basic Auth

### Rate Limiting

**Important**: The Google Places API has a rate limit that requires waiting at least **3 seconds** between consecutive requests. This means:

- Initial searches will take approximately 3+ seconds
- If you're making multiple rapid searches, each subsequent search may take longer than expected
- The application will display a loading state during this waiting period

### Request Format

```json
{
  "search": "your search query here"
}
```

### Response Format

```json
{
  "results": [
    {
      "internationalPhoneNumber": "+1 713-454-0832",
      "formattedAddress": "1450 Gulfgate Center Mall, Houston, TX 77087, USA",
      "rating": 3.3,
      "websiteUri": "https://www.starbucks.com/store-locator/store/12515/",
      "displayName": {
        "text": "Starbucks Coffee Company",
        "languageCode": "en"
      }
    }
  ]
}
```

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_URL=https://your-n8n-webhook-url
VITE_API_USERNAME=your_username
VITE_API_PASSWORD=your_password
```

See `.env.example` for a template.

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build

Create a production build:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── api/
│   └── api.ts           # API client for making search requests
├── components/
│   ├── LoadingState.tsx     # Loading spinner component
│   ├── PlaceCard.tsx        # Individual place result card
│   ├── PlaceDetailSidebar.tsx # Sidebar with full place details
│   ├── ResultsGrid.tsx      # Grid container for place cards
│   └── SearchForm.tsx       # Search input and button
├── hooks/
│   └── usePlaceSearch.ts    # Custom hook for search state management
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── types.ts             # TypeScript type definitions
```

## Usage

1. Enter a search query in the search box (e.g., "Starbucks in Houston TX")
2. Click the Search button or press Enter
3. Wait for the results to load (may take 3+ seconds due to API rate limits)
4. Click on any place card to view full details in the sidebar
5. Use the copy icons next to any value to copy it to your clipboard
6. Dismiss the sidebar by clicking outside, pressing Escape, or clicking the X button

## Author

**Karekezi Caleb Buhungiro**

- Portfolio: [https://bcaleb.fun](https://bcaleb.fun)
- LinkedIn: [https://www.linkedin.com/in/buhungiro-caleb-622016149/](https://www.linkedin.com/in/buhungiro-caleb-622016149/)

## License

Copyright &copy; 2024 Karekezi Caleb Buhungiro. All rights reserved.

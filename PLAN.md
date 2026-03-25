# Place Search Page Plan

## Overview
A modern dark-themed React page with Tailwind CSS that allows users to search for places via an API and displays results in a card grid.

## Tech Stack
- **Framework**: React
- **Styling**: Tailwind CSS
- **API**: Real API endpoint (n8n webhook)

## Components
1. **SearchForm** - Input field + search button
2. **PlaceCard** - Compact result card (clickable, opens detail sidebar):
   - Name (from displayName.text), rating
   - Address, phone number (truncated)
3. **PlaceDetailSidebar** - Right-side drawer showing all place details:
   - Dismissible via: X button, click outside overlay, Escape key
   - Shows all fields: name, address, phone, rating, website
   - Click copy icon next to any value to copy to clipboard
   - Toast notification on copy
4. **ResultsGrid** - Responsive grid container (1-4 columns)
5. **EmptyState** - Message when no results
6. **LoadingState** - Spinner during fetch

## State Management
- `searchQuery` - User input
- `results` - Array from API
- `isLoading` - Loading boolean
- `error` - Error message (if any)

## API
- **Endpoint**: Stored in `VITE_API_URL` env variable
- **Method**: POST
- **Authentication**: Basic Auth (credentials stored in `.env`)
- **Environment Variables**:
  - `VITE_API_URL` - API endpoint URL
  - `VITE_API_USERNAME` - API username
  - `VITE_API_PASSWORD` - API password
- **Body**: `{ "search": "<query>" }`
- `searchPlaces(query)` - Makes real API call

## Design
- Dark mode theme
- Dark background (`bg-gray-900`)
- Elevated cards (`bg-gray-800`)
- Accent color for interactive elements

## File Structure
```
.env                    # API credentials (not committed)
.env.example            # Template for env variables
.gitignore              # Ignores .env and node_modules
src/
  components/
    SearchForm.tsx
    PlaceCard.tsx
    PlaceDetailSidebar.tsx
    ResultsGrid.tsx
  hooks/
    usePlaceSearch.ts
  api/
    api.ts
  App.tsx
  types.ts
```

## Response Structure
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

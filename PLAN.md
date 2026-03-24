# Place Search Page Plan

## Overview
A modern dark-themed React page with Tailwind CSS that allows users to search for places via an API and displays results in a card grid.

## Tech Stack
- **Framework**: React
- **Styling**: Tailwind CSS
- **API**: Real API endpoint (n8n webhook)

## Components
1. **SearchForm** - Input field + search button
2. **PlaceCard** - Individual result card showing:
   - Name, address, rating, price level
   - Open/closed status badge
   - Place type tags
3. **ResultsGrid** - Responsive grid container (1-3 columns)
4. **EmptyState** - Message when no results
5. **LoadingState** - Spinner during fetch

## State Management
- `searchQuery` - User input
- `results` - Array from API
- `isLoading` - Loading boolean
- `error` - Error message (if any)

## API
- **Endpoint**: `https://n8n.bcaleb.fun/webhook/c8156f56-5349-4cb9-85e6-ef2feac2acc9`
- **Method**: POST
- **Authentication**: Basic Auth (credentials stored in `.env`)
- **Environment Variables**:
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
    ResultsGrid.tsx
  hooks/
    usePlaceSearch.ts
  api/
    api.ts
  App.tsx
  types.ts
```

## Response Structure (from place.json)
```json
{
  "results": [
    {
      "business_status": "OPERATIONAL",
      "formatted_address": "...",
      "icon": "...",
      "name": "...",
      "opening_hours": { "open_now": true },
      "photos": [{ "photo_reference": "...", "height": ..., "width": ... }],
      "place_id": "...",
      "plus_code": { "compound_code": "...", "global_code": "..." },
      "price_level": 2,
      "rating": 4,
      "reference": "...",
      "types": ["cafe", "food", ...]
    }
  ]
}
```

export interface DisplayName {
  text: string;
  languageCode: string;
}

export interface Place {
  internationalPhoneNumber?: string;
  formattedAddress: string;
  rating?: number;
  websiteUri?: string;
  displayName: DisplayName;
}

export interface PlacesResponse {
  results: Place[];
}

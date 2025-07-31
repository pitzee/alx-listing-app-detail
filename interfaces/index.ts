// Property address structure
export interface AddressProps {
  state: string;
  city: string;
  country: string;
}

// Property offers structure
export interface OffersProps {
  bed: string;
  shower: string;
  occupants: string;
}

// Main property interface
export interface PropertyProps {
  name: string;
  address: AddressProps;
  rating: number;
  category: string[];
  price: number;
  offers: OffersProps;
  image: string;
  discount: string;
}

export interface MainDataType {
  id: number;
  name: string;
  images: string[];
  prices: PriceType[];
  duration: DurationType;
  places_covered: string[];
  inclusions: string[];
  exclusions: string[];
}

export interface PriceType {
  type: string;
  price: number;
}

export interface DurationType {
    day: number;
    night: number;
}

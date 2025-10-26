export interface MainDataType {
  id: number;
  name: string;
  desc:string;
  images: string[];
  prices: PriceType[];
  duration: DurationType;
  places_covered: string[];
  inclusions: string[];
  exclusions: string[];
}

export interface PriceType {
  type: SharingType;
  label:string;
  price: number;
  isHoneyMoon?:boolean
}

export interface DurationType {
    day: number;
    night: number;
}

export type SharingType = "quad"|"triple"|"double"|"couple"|"single"
export interface PropertyListItemInterface {
  id: string;
  name: string;
  url: string;
  image: string;
  price: string;
}

export interface PropertyListInterface {
  items: PropertyListItemInterface[];
  nextPageUrl: string;
}

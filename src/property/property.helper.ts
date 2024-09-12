export function normalizePropertyPrice(price: string): string {
  return price.replace('€', '').replace(/\./g, '');
}

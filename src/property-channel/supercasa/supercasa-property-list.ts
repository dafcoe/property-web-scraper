import { getPropertyListItems } from '../../property-list/property-list';
import { BASE_URL_SUPERCASA, EXTRACT_RULES_PROPERTY_LIST_SUPERCASA } from './supercasa.constant';
import { PropertyListItemInterface } from '../../property-list/property-list.interface';
import { normalizePropertyPrice } from '../../property/property.helper';

export async function getPropertyListItemsSupercasa(
  url: string,
  fullList: boolean = false,
): Promise<PropertyListItemInterface[]> {
  const propertyListItems = await getPropertyListItems(
    url,
    EXTRACT_RULES_PROPERTY_LIST_SUPERCASA,
    fullList,
    normalizeUrl,
  );

  return hydratePropertyListItems(propertyListItems);
}

function hydratePropertyListItems(listItems: PropertyListItemInterface[]): PropertyListItemInterface[] {
  return listItems.map((listItem) => ({
    ...listItem,
    url: normalizeUrl(listItem.url),
    image: cleanupImage(listItem.image || ''),
    price: normalizePropertyPrice(listItem.price),
  }));
}

function normalizeUrl(url: string): string {
  return url.startsWith(BASE_URL_SUPERCASA) ? url : `${BASE_URL_SUPERCASA}${url}`;
}

function cleanupImage(image: string): string {
  return image.replace('background-image: url(', '').replace(')', '');
}

import { scrape } from '../scraper/scraper';
import { PropertyListInterface, PropertyListItemInterface } from './property-list.interface';

export async function getPropertyListItems(
  url: string,
  extractRules: any,
  fullList: boolean = false,
  urlNormalizer: CallableFunction = (url: string) => url,
): Promise<PropertyListItemInterface[]> {
  let propertyList: PropertyListInterface = {items: [], nextPageUrl: url};
  const propertyListItems: PropertyListItemInterface[] = [];

  do {
    const scrapedPropertyList = await scrape(urlNormalizer(propertyList.nextPageUrl), extractRules);

    propertyList = mapScrapedPropertyListToPropertyList(scrapedPropertyList);
    propertyListItems.push(...propertyList.items);
  } while (fullList && propertyList.nextPageUrl);

  return propertyListItems;
}

function mapScrapedPropertyListToPropertyList(scrapedPropertyList: string): PropertyListInterface {
  const {items, nextPageUrl} = JSON.parse(scrapedPropertyList);

  return {
    items: items.map(({id, name, url, image, price}) => ({
      id: id[0],
      name: name[0],
      url: url[0],
      image: image[0],
      price: price[0],
    })),
    nextPageUrl: nextPageUrl[0],
  };
}

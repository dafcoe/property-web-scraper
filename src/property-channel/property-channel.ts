import { PropertyChannelType } from './property-channel.type';
import { CHANNELS_BASE_URL, CHANNELS_GET_PROPERTY_LIST_ITEMS } from './property-channel.constant';
import { PropertyListItemInterface } from '../property-list/property-list.interface';

export async function getChannelPropertyListItems(
  urls: string[],
  fullList: boolean = false,
): Promise<PropertyListItemInterface[]> {
  handleInvalidUrls(urls);

  let channelPropertyListItems: PropertyListItemInterface[] = [];

  for (const url of urls) {
    const propertyChannel = resolveChannelFromUrl(url);

    channelPropertyListItems = [
      ...channelPropertyListItems,
      ...await CHANNELS_GET_PROPERTY_LIST_ITEMS[propertyChannel](url, fullList),
    ];
  }

  return channelPropertyListItems;
}

function handleInvalidUrls(urls: string[]): void {
  const invalidUrls = urls.filter((url) => !resolveChannelFromUrl(url)).map((url) => ({ url }));

  if (invalidUrls.length) {
    console.log('The following urls are invalid or not supported:');
    console.table(invalidUrls);
    console.error('Aborting...');
    process.exit(1);
  }
}

function resolveChannelFromUrl(url: string): PropertyChannelType | undefined {
  for (const [channelKey, channelValue] of Object.entries(CHANNELS_BASE_URL)) {
    if (url.startsWith(channelValue)) return channelKey as PropertyChannelType;
  }

  return undefined;
}

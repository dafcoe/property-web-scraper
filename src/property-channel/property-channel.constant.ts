import { PropertyChannelType } from './property-channel.type';
import { BASE_URL_IDEALISTA } from './idealista/idealista.constant';
import { BASE_URL_SUPERCASA } from './supercasa/supercasa.constant';
import { getPropertyListItemsIdealista } from './idealista/idealista-property-list';
import { getPropertyListItemsSupercasa } from './supercasa/supercasa-property-list';

export const CHANNELS_BASE_URL: Record<PropertyChannelType, string> = {
  idealista: BASE_URL_IDEALISTA,
  supercasa: BASE_URL_SUPERCASA,
};

export const CHANNELS_GET_PROPERTY_LIST_ITEMS = {
  idealista: getPropertyListItemsIdealista,
  supercasa: getPropertyListItemsSupercasa,
};

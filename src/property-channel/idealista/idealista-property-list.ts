import { getPropertyListItems } from "../../property-list/property-list";
import { BASE_URL_IDEALISTA, EXTRACT_RULES_PROPERTY_LIST_IDEALISTA } from "./idealista.constant";
import { PropertyListItemInterface } from "../../property-list/property-list.interface";
import { normalizePropertyPrice } from "../../property/property.helper";

export async function getPropertyListItemsIdealista(
    url: string,
    fullList: boolean = false,
): Promise<PropertyListItemInterface[]> {
    const propertyListItems = await getPropertyListItems(
        url,
        EXTRACT_RULES_PROPERTY_LIST_IDEALISTA,
        fullList,
        prependBaseUrl,
    );

    return hydratePropertyListItems(propertyListItems);
}

function hydratePropertyListItems(listItems: PropertyListItemInterface[]): PropertyListItemInterface[] {
    return listItems.map((listItem) => ({
        ...listItem,
        url: prependBaseUrl(listItem.url),
        price: normalizePropertyPrice(listItem.price),
    }));
}

function prependBaseUrl(url: string): string {
    return url.startsWith(BASE_URL_IDEALISTA) ? url : `${BASE_URL_IDEALISTA}${url}`;
}

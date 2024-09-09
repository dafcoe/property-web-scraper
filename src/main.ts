import { getPropertyListItemsIdealista } from "./property-channel/idealista/idealista-property-list";
import { getPropertyListItemsSupercasa } from "./property-channel/supercasa/supercasa-property-list";
import { PropertyListItemInterface } from "./property-list/property-list.interface";

async function init() {
    const propertyListItemsIdealista = await getPropertyListItemsIdealista(
        'https://www.idealista.pt/comprar-casas/vila-real-de-santo-antonio/',
    );

    const propertyListItemsSupercasa = await getPropertyListItemsSupercasa(
        'https://supercasa.pt/comprar-casas/vila-real-de-santo-antonio',
    );

    const propertyListItems: PropertyListItemInterface[] = [
        ...propertyListItemsIdealista,
        ...propertyListItemsSupercasa,
    ];

    console.log(propertyListItems.length);
}

init();

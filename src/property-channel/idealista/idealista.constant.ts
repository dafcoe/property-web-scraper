export const BASE_URL_IDEALISTA = 'https://www.idealista.pt';

export const EXTRACT_RULES_PROPERTY_LIST_IDEALISTA = {
  items: {
    selector: '.item',
    output: {
      id: {
        selector: '[data-element-id]',
        output: '@data-element-id',
        clean: 1,
      },
      name: {
        selector: 'a.item-link',
        output: 'text',
        clean: 1,
      },
      url: {
        selector: 'a.item-link',
        output: '@href',
        clean: 1,
      },
      image: {
        selector: 'picture.item-multimedia .item-gallery picture img',
        output: '@src',
        clean: 1,
      },
      price: {
        selector: '.price-row .item-price',
        output: 'text',
        clean: 1,
      },
    },
    all: 1,
    clean: 1,
  },
  nextPageUrl: {
    selector: '.pagination li.next a',
    output: '@href',
    clean: 1,
  },
};

export const BASE_URL_SUPERCASA = 'https://supercasa.pt';

export const EXTRACT_RULES_PROPERTY_LIST_SUPERCASA = {
  items: {
    selector: '.property',
    output: {
      id: {
        selector: '[id]',
        output: '@id',
        clean: 1,
      },
      name: {
        selector: '.property-list-title a',
        output: 'text',
        clean: 1,
      },
      url: {
        selector: '.property-list-title a',
        output: '@href',
        clean: 1,
      },
      image: {
        selector: '.property-media .swiper-wrapper',
        output: '@style',
        clean: 1,
      },
      price: {
        selector: '.property-price span',
        output: 'text',
        clean: 1,
      },
    },
    all: 1,
    clean: 1,
  },
  nextPageUrl: {
    selector: '.list-pagination a.list-pagination-next',
    output: '@href',
    clean: 1,
  },
};

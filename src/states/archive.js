import { atom, atomFamily } from 'recoil';

export const PickPerfume = atom({
  key: 'PickPerfume',
  default: [],
});

export const ShowDetailPerfuem = atom({
  key: 'ShowDetailPerfuem',
  default: {},
});

export const PageState = atom({
  key: 'PageState',
  default: 1,
});

export const perfumeData = [
  {
    id: 1,
    url: 'https://fimgs.net/mdimg/perfume/375x500.2030.jpg',
    brand: 'ANNA SUI',
    name: 'FLIGHT OF FANCY',
    gedner: 'FEMALE',
    type: 'floral',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },
  {
    id: 2,
    url: 'https://fimgs.net/mdimg/perfume/375x500.67695.jpg',
    brand: 'Gucci',
    name: '1921',
    gedner: 'ALL',
    type: 'fresh-green',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },

  {
    id: 3,
    url: 'https://fimgs.net/mdimg/perfume/375x500.3176.jpg',
    brand: 'Hermès',
    name: 'Eau des Merveilles',
    gedner: 'FEMALE',
    type: 'woody',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },
  {
    id: 4,
    url: 'https://fimgs.net/mdimg/perfume/375x500.33519.jpg',
    brand: 'Maison Francis Kurkdjian',
    name: 'Baccarat Rouge 540 Maison Francis Kurkdjian',
    gedner: 'ALL',
    type: 'amber',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },
  {
    id: 5,
    url: 'https://fimgs.net/mdimg/perfume/375x500.43718.jpg',
    brand: 'Chanel',
    name: 'Gabrielle Chanel',
    gedner: 'FEMALE',
    type: 'sweet-floral',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },
  {
    id: 6,
    url: 'https://fimgs.net/mdimg/perfume/375x500.869.jpg',
    brand: 'Jennifer Lopez',
    name: 'Glow Jennifer Lopez',
    gedner: 'FEMALE',
    type: 'white-floral',
    top: ['Blackberry', 'Neroli'],
    middle: ['Tuberose', 'Orange', 'Blossom'],
    base: ['Milk Mousse Black', 'Vanilla Husk', 'Patchouli'],
    detail:
      'In February 2016, Salvatore Ferragamo launched another fragrance from the Signorina collection, Signorina Misteriosa. Signorina Misteriosa completes the collection as the night-time, unpredictable and mysterious flanker of the scent.',
  },
];

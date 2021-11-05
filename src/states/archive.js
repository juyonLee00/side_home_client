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
  },
  {
    id: 2,
    url: 'https://fimgs.net/mdimg/perfume/375x500.67695.jpg',
    brand: 'Gucci',
    name: '1921',
    gedner: 'ALL',
    type: 'fresh-green',
  },
  {
    id: 3,
    url: 'https://fimgs.net/mdimg/perfume/375x500.3176.jpg',
    brand: 'Hermès',
    name: 'Eau des Merveilles',
    gedner: 'FEMALE',
    type: 'woody',
  },
  {
    id: 4,
    url: 'https://fimgs.net/mdimg/perfume/375x500.33519.jpg',
    brand: 'Maison Francis Kurkdjian',
    name: 'Baccarat Rouge 540 Maison Francis Kurkdjian',
    gedner: 'ALL',
    type: 'amber',
  },
  {
    id: 5,
    url: 'https://fimgs.net/mdimg/perfume/375x500.43718.jpg',
    brand: 'Chanel',
    name: 'Gabrielle Chanel',
    gedner: 'FEMALE',
    type: 'sweet-floral',
  },
  {
    id: 6,
    url: 'https://fimgs.net/mdimg/perfume/375x500.869.jpg',
    brand: 'Jennifer Lopez',
    name: 'Glow Jennifer Lopez',
    gedner: 'FEMALE',
    type: 'white-floral',
  },
];

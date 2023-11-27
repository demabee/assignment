import toolbox from '../../assets/images/toolbox.webp';
import beverages from '../../assets/images/beverages.jpeg';
import accessories from '../../assets/images/accessories.webp';
import electronics from '../../assets/images/electronics.jpeg';
import clothes from '../../assets/images/clothes.jpeg';
import homeAndFurniture from '../../assets/images/homeAndFurniture.jpeg';
import beautyAndPersonalCare from '../../assets/images/beautyAndPersonalCare.jpeg';
import booksAndLiterature from '../../assets/images/booksAndLiterature.webp';
import sportsAndOutdoors from '../../assets/images/sportsAndOutdoors.jpeg';
import toysAndGames from '../../assets/images/toysAndGames.jpeg';
import automotive from '../../assets/images/automotive.jpeg';
import healthAndWellness from '../../assets/images/healthAndWellness.jpeg';
import { type ProductsType } from '../types';

export const productCategories = [
  { id: 1, name: 'Toolbox', image: toolbox },
  { id: 2, name: 'Beverages', image: beverages },
  { id: 3, name: 'Accessories', image: accessories },
  { id: 4, name: 'Electronics', image: electronics },
  { id: 5, name: 'Clothes', image: clothes },
  { id: 6, name: 'Home and Furniture', image: homeAndFurniture },
  { id: 7, name: 'Beauty and Personal Care', image: beautyAndPersonalCare },
  { id: 8, name: 'Books and Literature', image: booksAndLiterature },
  { id: 9, name: 'Sports and Outdoors', image: sportsAndOutdoors },
  { id: 10, name: 'Toys and Games', image: toysAndGames },
  { id: 11, name: 'Automotive', image: automotive },
  { id: 12, name: 'Health and Wellness', image: healthAndWellness }
];

export const productsData = (t: any): ProductsType[] => [
  {
    id: 1,
    name: t('common:products.toolbox'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 13.0,
    currency: '$',
    image: toolbox,
    categoryId: 1
  },
  {
    id: 2,
    name: t('common:products.beverages'),
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 9.5,
    currency: '$',
    image: beverages,
    categoryId: 1
  },
  {
    id: 3,
    name: t('common:products.accessories'),
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 20.0,
    currency: '$',
    image: accessories,
    categoryId: 1
  },
  {
    id: 4,
    name: t('common:products.garden_tools'),
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 15.75,
    currency: '$',
    image: electronics,
    categoryId: 1
  },
  {
    id: 5,
    name: t('common:products.home_decor'),
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 8.99,
    currency: '$',
    image: clothes,
    categoryId: 1
  },
  {
    id: 6,
    name: t('common:products.electronics'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 29.99,
    currency: '$',
    image: homeAndFurniture,
    categoryId: 6
  },
  {
    id: 7,
    name: t('common:products.kitchen_appliances'),
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 45.5,
    currency: '$',
    image: beautyAndPersonalCare,
    categoryId: 1
  },
  {
    id: 8,
    name: t('common:products.outdoor_furniture'),
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 89.99,
    currency: '$',
    image: booksAndLiterature,
    categoryId: 1
  },
  {
    id: 9,
    name: t('common:products.clothing'),
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 25.0,
    currency: '$',
    image: booksAndLiterature,
    categoryId: 3
  },
  {
    id: 10,
    name: t('common:products.toys'),
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 12.5,
    currency: '$',
    image: sportsAndOutdoors,
    categoryId: 1
  },
  {
    id: 11,
    name: t('common:products.power_tools'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 149.99,
    currency: '$',
    image: toysAndGames,
    categoryId: 5
  },
  {
    id: 12,
    name: t('common:products.fitness_equipment'),
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 79.95,
    currency: '$',
    image: accessories,
    categoryId: 6
  },
  {
    id: 13,
    name: t('common:products.smart_home_devices'),
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 199.99,
    currency: '$',
    image: sportsAndOutdoors,
    categoryId: 1
  },
  {
    id: 14,
    name: t('common:products.pet_supplies'),
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 29.5,
    currency: '$',
    image: booksAndLiterature,
    categoryId: 2
  },
  {
    id: 15,
    name: t('common:products.art_and_craft_supplies'),
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 14.99,
    currency: '$',
    image: sportsAndOutdoors,
    categoryId: 3
  },
  {
    id: 16,
    name: t('common:products.home_security_systems'),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 299.99,
    currency: '$',
    image: accessories,
    categoryId: 7
  },
  {
    id: 17,
    name: t('common:products.books'),
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    price: 9.99,
    currency: '$',
    image: automotive,
    categoryId: 5
  },
  {
    id: 18,
    name: t('common:products.car_accessories'),
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 34.75,
    currency: '$',
    image: automotive,
    categoryId: 10
  },
  {
    id: 19,
    name: t('common:products.office_supplies'),
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    price: 19.99,
    currency: '$',
    image: automotive,
    categoryId: 6
  },
  {
    id: 20,
    name: t('common:products.musical_instrument'),
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 129.0,
    currency: '$',
    image: healthAndWellness,
    categoryId: 12
  }
];

export const userData = {
  firstName: 'Andre',
  lastName: 'Demavivas',
  position: 'Developer',
  username: 'demabee'
};

export const languageData = [
  { label: 'English', value: 'en' },
  { label: 'France', value: 'fr' }
];

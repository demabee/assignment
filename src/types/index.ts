import { ImageSourcePropType } from 'react-native';

export type CategoriesType = {
  id: number;
  name: string;
  image: ImageSourcePropType;
};

export type ProductsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: ImageSourcePropType;
  categoryId: number;
};

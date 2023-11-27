import { ProductsType } from 'types';
import { productCategories, productsData } from '../constants';

export const fetchProductCategories = async () => {
  return await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Array.isArray(productCategories)) {
        resolve(productCategories);
      } else {
        reject(new Error('No data available'));
      }
    }, 1000);
  });
};

export const fetchProductLists = async (
  page: number = 1,
  searchQuery: string,
  categoryId?: number | null,
  itemsPerPage: number = 5,
) => {
  let filteredData = productsData;
  if (searchQuery.trim() !== '') {
    filteredData = filteredData.filter((item: ProductsType) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    page = 1;
  }

  if (categoryId !== null) {
    filteredData = filteredData.filter(
      (item: ProductsType) => item.categoryId === categoryId,
    );
  }
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const pageData = filteredData.slice(startIndex, endIndex);

  return new Promise<{ data: ProductsType[]; totalPages: number }>(
    (resolve, reject) => {
      setTimeout(() => {
        if (Array.isArray(pageData)) {
          resolve({ data: pageData, totalPages });
        } else {
          reject(new Error('No data available'));
        }
      }, 1000);
    },
  );
};

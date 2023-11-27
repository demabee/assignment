import { createContext, type ReactNode, useState } from 'react';

interface FilterContextProps {
  searchQuery: string
  setSearchQuery: (newSearchQuery: string) => void
  productsScreenFocused: boolean
  setProductsScreenFocused: (newProductsScreenFocused: boolean) => void
  categoryId: number | null
  setCategoryId: (newCategoryId: number | null) => void
  itemsPerPage: number
  setItemsPerPage: (newItemsPerPage: number) => void
  page: number
  setPage: (newPage: number) => void
}

export const FilterContext = createContext<FilterContextProps>({
  searchQuery: '',
  setSearchQuery: () => {},
  productsScreenFocused: false,
  setProductsScreenFocused: () => {},
  categoryId: null,
  setCategoryId: () => {},
  itemsPerPage: 5,
  setItemsPerPage: () => {},
  page: 1,
  setPage: () => {}
});

interface FilterProviderProps {
  children?: ReactNode
}

export const SearchQueryProvider: React.FC<FilterProviderProps> = ({
  children
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [productsScreenFocused, setProductsScreenFocused] =
    useState<boolean>(false);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [page, setPage] = useState<number>(1);

  return (
    <FilterContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
        productsScreenFocused,
        setProductsScreenFocused,
        categoryId,
        setCategoryId,
        itemsPerPage,
        setItemsPerPage,
        page,
        setPage
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

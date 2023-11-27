import { useCallback, useState } from 'react';
import { type ProductsType } from 'types';
import { debounce } from '../../helpers';
import { fetchProductLists } from '../../api';
import { useTranslation } from 'react-i18next';

export default function useGetProductLists () {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetch = debounce(
    async (
      searchQuery: string,
      categoryId?: number | null,
      itemsPerPage: number = 5,
      page: number = 1
    ) => {
      try {
        setLoading(true);
        const result = await fetchProductLists(
          t,
          page,
          searchQuery,
          categoryId,
          itemsPerPage
        );
        setProducts(result.data);
        setTotalPages(result.totalPages);
        setHasMore(result.data.length > 0);
      } catch (error: any) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    1000
  );

  const debouncedFetch = useCallback(fetch, []);

  return {
    data: products,
    totalPages,
    fetchData: debouncedFetch,
    loading,
    setLoading,
    hasMore
  };
}

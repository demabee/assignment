import { useCallback, useState } from 'react';
import { type ImageSourcePropType } from 'react-native';
import { fetchProductCategories } from '../../api';

interface CategoriesType {
  id: number
  name: string
  image: ImageSourcePropType
}

export default function useGetProductCategories () {
  const [loading, setLoading] = useState<boolean>(false);
  const [categories, setCategories] = useState<CategoriesType[] | null>([]);

  const fetch = useCallback(async () => {
    try {
      setLoading(true);
      const result = await fetchProductCategories();
      if (Array.isArray(result)) {
        setCategories(result);
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    data: categories,
    fetchData: fetch,
    loading
  };
}

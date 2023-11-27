import useGetProductLists from '../hooks/products/useGetProductLists';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { useContext, useEffect } from 'react';
import { FilterContext } from '../context/FilterContext';
import EmptyData from '../components/EmptyData';
import { Icon } from '@rneui/themed';

const Products: React.FC = () => {
  const { categoryId, searchQuery, itemsPerPage, page, setPage } =
    useContext(FilterContext);
  const { data, fetchData, loading, setLoading, hasMore, totalPages } =
    useGetProductLists();

  const goPrevious = () => {
    if (!loading && page > 1) {
      setPage(page - 1);
    }
  };

  const goNext = () => {
    if (!loading && page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    setLoading(true);
    void fetchData(searchQuery, categoryId, itemsPerPage, page);
  }, [searchQuery, categoryId, hasMore, page]);

  useEffect(() => {}, [data]);

  return (
    <>
      {loading
        ? (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
          )
        : data.length > 0
          ? (
        <>
          <ScrollView style={styles.container}>
            {data.map((item, index) => (
              <View style={styles.itemContainer} key={`${item.id}-${index}`}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.itemDetailsContainer}>
                  <View style={styles.itemNamePriceContainer}>
                    <View>
                      <Text style={styles.name}>{item.name}</Text>
                    </View>
                    <View style={styles.itemPriceContainer}>
                      <Text style={styles.price}>{item.currency}</Text>
                      <Text style={styles.price}>{item.price.toFixed(2)}</Text>
                    </View>
                  </View>
                  <Text>{item.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View style={styles.paginationContainer}>
            <TouchableOpacity
              onPress={goPrevious}
              style={styles.arrowContainer}
            >
              <Icon type="font-awesome" name="chevron-left" />
            </TouchableOpacity>
            {[...Array(totalPages)].map((_, index) => (
              <TouchableOpacity
                onPress={() => setPage(index + 1)}
                key={index}
                style={styles.arrowContainer}
              >
                <Text
                  style={[
                    styles.pageText,
                    { color: page === index + 1 ? 'blue' : 'black' }
                  ]}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={goNext} style={styles.arrowContainer}>
              <Icon type="font-awesome" name="chevron-right" />
            </TouchableOpacity>
          </View>
        </>
            )
          : (
        <EmptyData text="No item found" />
            )}
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    flex: 1
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    borderBottomWidth: 0.5,
    padding: 10,
    borderColor: 'gray'
  },
  itemDetailsContainer: {
    flex: 1
  },
  itemNamePriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemPriceContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  name: {
    fontWeight: 'bold'
  },
  price: {
    fontWeight: 'bold'
    // marginLeft: 'auto'
  },
  paginationContainer: {
    flex: 0.1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  arrowContainer: {
    padding: 10
  },
  pageText: {
    fontWeight: 'bold',
    fontSize: 18
  }
});

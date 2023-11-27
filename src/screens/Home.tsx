import {
  FlatList,
  Image,
  type ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import React, { useContext, useEffect } from 'react';
import useGetProductCategories from '../hooks/products/useGetProductCategories';
import { type CategoriesType } from 'types';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FilterContext } from '../context/FilterContext';

const Home = () => {
  const navigation = useNavigation();
  const { setCategoryId, setProductsScreenFocused } = useContext(FilterContext);
  const { data, fetchData } = useGetProductCategories();

  const handleGoToProductsScreen = (id: number) => {
    setCategoryId(id);
    setProductsScreenFocused(true);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Products'
      })
    );
  };

  const renderItem: ListRenderItem<CategoriesType> = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      key={item.id}
      onPress={() => handleGoToProductsScreen(item.id)}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    void fetchData();
  }, []);

  useEffect(() => {}, [data]);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      numColumns={3}
    />
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    padding: 10
  },
  itemContainer: {
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
    borderRadius: 10
  },
  name: {
    fontWeight: 'bold'
  }
});

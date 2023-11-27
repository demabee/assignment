import React, { useContext, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Input, Icon } from '@rneui/themed';
import { commonStyles } from '../styles';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { FilterContext } from '../context/FilterContext';
import { useTranslation } from 'react-i18next';

const SearchInput: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const {
    setCategoryId,
    setSearchQuery,
    productsScreenFocused,
    setProductsScreenFocused,
    setPage
  } = useContext(FilterContext);
  const [searchInput, setSearchInput] = useState<string>('');

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setProductsScreenFocused(false);
    if (!productsScreenFocused) {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Products'
        })
      );
    }
    setProductsScreenFocused(true);
  };

  const handleGoBack = () => {
    setProductsScreenFocused(false);
    setSearchQuery('');
    setSearchInput('');
    setCategoryId(null);
    setPage(1);
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Home'
      })
    );
  };

  return (
    <View style={[commonStyles.screenContainer, styles.container]}>
      {productsScreenFocused && (
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon type="font-awesome" name="chevron-left" />
        </TouchableOpacity>
      )}
      <Input
        containerStyle={styles.searchContainerStyle}
        inputContainerStyle={styles.inputContainer}
        placeholder={t('common:search_products')}
        value={searchInput}
        onChangeText={text => {
          setSearchInput(text);
          if (!productsScreenFocused) {
            setSearchQuery(text);
          }
        }}
        onSubmitEditing={handleSearch}
        underlineColorAndroid="transparent"
        renderErrorMessage={false}
        rightIcon={{
          type: 'font-awesome',
          name: 'search',
          onPress: handleSearch
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    gap: 15
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  searchContainerStyle: {
    backgroundColor: 'rgba(15, 39, 71, 0.05)',
    borderTopColor: '#FBF5E6',
    borderBottomColor: '#FBF5E6',
    borderRadius: 8,
    flex: 1
  },
  backButton: {
    padding: 5
  }
});

export default SearchInput;

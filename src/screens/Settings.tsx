import { Alert, StyleSheet, Text, View } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { useContext, useState } from 'react';
import { FilterContext } from '../context/FilterContext';
import { Dropdown } from 'react-native-element-dropdown';
import { languageData } from '../constants';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t, i18n } = useTranslation();
  const { itemsPerPage, setItemsPerPage } = useContext(FilterContext);
  const { language, setLanguage } = useContext(LanguageContext);
  const [inputValue, setInputValue] = useState<string>(itemsPerPage.toString());
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleInputChange = (text: string) => {
    setInputValue(text);
    setError('');
    setIsError(false);
  };

  const handleSave = () => {
    const numericValue = parseFloat(inputValue);

    if (inputValue === '') {
      setError('Must not be left blank.');
      setIsError(true);
      return;
    }

    if (isNaN(numericValue) || numericValue <= 0) {
      setError('Please enter a valid positive number.');
      setIsError(true);
      return;
    }

    if (numericValue > 100) {
      setError('Value should not exceed 100.');
      setIsError(true);
      return;
    }
    setIsError(false);
    setItemsPerPage(numericValue);
    void i18n.changeLanguage(language);
    Alert.alert('Saved', 'Successfully saved!');
  };

  return (
    <View style={[styles.container]}>
      <View>
        <Text style={styles.inputLabel}>{t('common:number_of_records_per_page')}</Text>
        <Input
          containerStyle={styles.inputContainerStyle}
          inputContainerStyle={styles.inputContainer}
          placeholder="Records per page"
          value={inputValue}
          onChangeText={handleInputChange}
          underlineColorAndroid="transparent"
          errorMessage={error}
          renderErrorMessage={isError}
        />
      </View>
      <View>
        <Text style={styles.inputLabel}>{t('common:change_language')}</Text>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          data={languageData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'...'}
          value={language}
          onChange={(item) => {
            setLanguage(item.value);
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={handleSave} radius="md">
          <Icon type="font-awesome" name="save" color="white" size={15} /> Save
        </Button>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    paddingHorizontal: 30,
    gap: 10
  },
  inputContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  inputContainerStyle: {
    backgroundColor: 'rgba(15, 39, 71, 0.05)',
    borderTopColor: '#FBF5E6',
    borderBottomColor: '#FBF5E6',
    borderRadius: 8
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginTop: 10
  },
  iconContainerStyle: {
    backgroundColor: 'red'
  },
  inputLabel: {
    fontWeight: 'bold',
    paddingBottom: 5
  },
  dropdown: {
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(15, 39, 71, 0.05)'
  },
  placeholderStyle: {
    fontSize: 16
  }
});

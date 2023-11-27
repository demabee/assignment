import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './src/navigation/BottomNavigation';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SearchInput from './src/components/SearchInput';
import { SearchQueryProvider } from './src/context/FilterContext';

export default function App () {
  return (
    <SafeAreaProvider>
      <SearchQueryProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <SearchInput />
          <BottomNavigation />
        </NavigationContainer>
      </SearchQueryProvider>
    </SafeAreaProvider>
  );
}

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import ProductsNavigation from './ProductsNavigation';

const HomeNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductsStack" component={ProductsNavigation} />
    </Stack.Navigator>
  );
};

export default HomeNavigation;

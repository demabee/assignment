import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from '../../screens/Products';

const ProductsNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Products"
        component={Products}
        // initialParams={{ categoryId: '' }}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigation;

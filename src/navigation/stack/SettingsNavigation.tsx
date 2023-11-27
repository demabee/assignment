import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Settings from '../../screens/Settings';

const SettingsNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsNavigation;

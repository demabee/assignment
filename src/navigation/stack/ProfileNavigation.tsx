import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../../screens/Profile';

const ProfileNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigation;

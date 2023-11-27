import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './stack/HomeNavigation';
import ProfileNavigation from './stack/ProfileNavigation';
import SettingsNavigation from './stack/SettingsNavigation';
import { Icon } from '@rneui/themed';
import Products from '../screens/Products';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon
              type="font-awesome"
              name="home"
              color={focused ? 'blue' : ''}
            />
          )
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsNavigation}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Icon
              type="feather"
              name="settings"
              color={focused ? 'blue' : ''}
            />
          )
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigation}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon type="feather" name="user" color={focused ? 'blue' : ''} />
          )
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarStyle: { display: 'none' },
          tabBarItemStyle: { display: 'none' },
          tabBarIcon: ({ focused }) => (
            <Icon type="feather" name="user" color={focused ? 'blue' : ''} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

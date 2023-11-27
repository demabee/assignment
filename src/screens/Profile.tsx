import { userData } from '../constants';
import { Avatar } from '@rneui/themed';
import { StyleSheet, Text, View } from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Avatar
        size={100}
        rounded
        source={{
          uri: `https://ui-avatars.com/api/?name=${userData.firstName}+${userData.lastName}`
        }}
      />
      <Text style={styles.fullNameText}>
        {userData.firstName} {userData.lastName}
      </Text>
      <Text>{userData.position}</Text>
      <Text>{userData.username}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  fullNameText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20
  }
});

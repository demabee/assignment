import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';

interface EmptyDataProps {
  text?: string
}
const EmptyData: React.FC<EmptyDataProps> = ({ text }) => (
  <View style={styles.noDataContainer}>
    <Icon
      type="font-awesome"
      name="exclamation-circle"
      color="gray"
      size={40}
    />
    <Text style={styles.noDataText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20
  },
  noDataText: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center'
  }
});

export default EmptyData;

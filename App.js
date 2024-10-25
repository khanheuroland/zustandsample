import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import useStore from './store'
import MyButton from './component/MyButton';

export default function App() {
  const {count} = useStore();
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <MyButton/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

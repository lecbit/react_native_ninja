import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>HEllo</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>Lorem Lorem Lorem <Text>Lorem</Text> Lorem Lorem</Text>
        <Text>Lorem Lorem Lorem Lorem Lorem Lorem</Text>
        <Text>Lorem Lorem Lorem Lorem Lorem Lorem</Text>
      </View>
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
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20
  }
});

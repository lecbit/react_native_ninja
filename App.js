import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Abc', key: 1 },
    { name: 'Bcd', key: 2 },
    { name: 'Cdf', key: 3 },
    { name: 'Dfe', key: 4 },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
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
  item: {
    marginTop: 25,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'pink'
  }
});

import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Abc', id: 1 },
    { name: 'Bcd', id: 2 },
    { name: 'Cdf', id: 3 },
    { name: 'Dfe', id: 4 },
    { name: 'Abc', id: 5 },
    { name: 'Bcd', id: 6 },
    { name: 'Cdf', id: 7 },
    { name: 'Dfe', id: 8 },
    { name: 'Cdf', id: 9 },
    { name: 'Dfe', id: 10 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      {/* <ScrollView>
        {
          people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            )
          })
        }
      </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 25,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'pink',
    marginHorizontal: 10,
    marginTop: 24
  }
});
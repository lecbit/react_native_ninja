import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import AddTodoItem from './components/addTodoItem';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Abc aaaaaaaa', key: 1 },
    { text: 'Bcd bbbbbbbbb', key: 2 },
    { text: 'Cdf cccccccccc', key: 3 },
  ]);

  const pressHandler = (key) => {
    setTodos((oldTodos) => {
      return oldTodos.filter(todo => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })
    }
    else {
      Alert.alert('OOPS!', 'Must be more than 3 chars', [
        { text: 'Yeah'}
      ])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodoItem submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View >
    </View >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20
  }
});
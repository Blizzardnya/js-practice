import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/Navbar';
import { AddTodo } from './src/AddTodo';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title,
      completed: false
    }

    setTodos(prev => [...prev, newTodo])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View style={styles.main}>
      <Navbar title='Todo app'></Navbar>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({item}) => (
            <Todo todo={item} onRemove={removeTodo}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    // height: '93%',
    flex: 11,
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});

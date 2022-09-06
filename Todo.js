import { Button, TextInput } from '@react-native-material/core';
import { useState } from 'react';
import { View, Text } from 'react-native'
import { useStore, actions } from './store';
import { setTodoInput, addTodo } from './store/actions'
import { ListItem } from "@react-native-material/core";

const Todo = () => {
  const [state, dispatch] = useStore();
  const { todoInput, todos } = state;
  const [todoName, setTodoName] = useState();
  const [todoStatus, setTodoStatus] = useState();

  const handleAdd = () => {
    dispatch(addTodo(todoName))
  }

  return (
    <View>
      <TextInput
          style={{
            padding: 16,
            marginTop: 50,
          }}
          onChangeText={setTodoName}
          value={todoName}
          placeholder={'Please type here…'}
        />
      <Button variant="outlined" title="Add" onPress={handleAdd} />
        {
          todos.map((todo) =>
            <ListItem title={todo} />
          )
        }
    </View>
  )
}

export default Todo

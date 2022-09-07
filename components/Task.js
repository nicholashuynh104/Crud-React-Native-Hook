import { Button } from '@react-native-material/core';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useStore } from '../store';
import { setTodoInput, removeTodo } from '../store/actions';

const Task = (props) => {
  const [state, dispatch] = useStore();
  const task = props.task;

  const removeTask = (index) => {
    dispatch(removeTodo(index))
  }

  const completeTask = (index) => {
    dispatch(setTodoInput(index))
  }

  return (
    <View style={styles.item}>
      <View style={styles.itemstyle}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{task.name}</Text>
      </View>
        <View style={styles.itemstyle}>
          {(() => {
            if (task.status == 'done'){
              return (
                  <Button title='Close' variant="outlined" onPress={() => removeTask(task.id)} />
              )
            } else {
              return (
                <>
                  <Button title='Done' variant="outlined" onPress={() => completeTask(task.id)}/>
                  <Button title='Delete' variant="outlined" onPress={() => removeTask(task.id)} />
                </>
              )
            }
            return null;
          })()}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemstyle: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    fontSize: 20,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
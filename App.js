import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { StoreProvider } from './store';
import Todo from './Todo';

export default function App() {
  return (
    <SafeAreaView>
      <StoreProvider>
       <Todo/>
      </StoreProvider>
    </SafeAreaView>
  );
}


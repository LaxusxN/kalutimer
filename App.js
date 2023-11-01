import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import  Header  from './components/Header';



export default function App() {
  const [timeTask, setTimeTask]=useState(' ');
  const [task,setTask]=useState(' ');

  return (
    <View style={styles.container}>
      <Text>KaluTimer</Text>
      <Text>Esta app te ayudará a establecer tiempos para una tarea</Text>
      <Text>Y el tiempo real que te demoras en hacerlo</Text>
      <Text>Por último, compararlos y ver tu eficiencias en la realización de dichas tareas</Text>
      <Header 
      task={task}
      setTask={setTask}
      timeTask={timeTask}
      setTimeTask={setTimeTask}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2b48c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

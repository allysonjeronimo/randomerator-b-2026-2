
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { Button, BUTTON_DANGER, BUTTON_SECONDARY, BUTTON_SUCCESS } from './components/button';

export default function App() {

  const [value, setValue] = useState(0)

  function incrementar(){
    setValue(value + 1)
  }

  function decrementar(){
    setValue(value - 1)
  }

  function resetar(){
    setValue(0)
  }

  function randomizar(){
    const randomValue = Math.floor((Math.random() * 100)) + 1
    setValue(randomValue)
  }

  // JSX
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randomerator</Text>
      <View style={styles.content}>
        <Text style={styles.resultText}>{value}</Text>
        <Button text="Incrementar" onClick={incrementar}/>
        <Button type={BUTTON_SECONDARY} text="Decrementar" onClick={decrementar}/>
        <Button type={BUTTON_DANGER} text="Resetar" onClick={resetar}/>
        <Button type={BUTTON_SUCCESS} text="Randomizar" onClick={randomizar}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(176, 176, 176)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
    gap: 32
  },
  title: {
    color: "#7a7a7a",
    fontWeight: "700",
    fontSize: 32
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 16,
    gap: 16,
    borderRadius: 16
  },
  resultText: {
    fontSize: 48,
    color: "#525252",
    fontWeight: "bold",
    textAlign: "center"
  }
});

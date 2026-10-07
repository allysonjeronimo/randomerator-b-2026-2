
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  // JSX
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Randomerator</Text>
      <Pressable style={styles.buttonPrimary}>
        <Text style={styles.buttonText}>Gerar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececec',
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
  buttonPrimary:{
    backgroundColor: "#1c6fd4",
    padding: 8,
    borderRadius: 8,
    width: "100%"
  },
  buttonText:{
    color: "#fff",
    fontSize: 24,
    textAlign: "center"
  }
});

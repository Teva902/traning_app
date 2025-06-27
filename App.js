import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={styles.text}>Hi Ahmed you are gamed</Text>
      <Text style={styles.text}>Hi Ahmed you are gamed</Text>
      <Text style={styles.text}>Hi Ahmed you are gamed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // علشان النص يبقى في النص
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;

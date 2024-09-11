import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Nav from './components/navigation'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 50},
});
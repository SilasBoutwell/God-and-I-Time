import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Text style={styles.title}>God And I Time</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyTitle}>This is the body area.</Text>
        <Text style={styles.content}>Welcome to your daily devotion!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 50},
  nav: {padding: 10, backgroundColor: '#ccc', },
  title: {fontSize: 30, fontWeight: 'semibold'},
  body: {flex: 1, alignItems: 'center',},
  bodyTitle: {},
  content: {},
});
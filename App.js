import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation style={styles.nav} />
      <Body style={styles.body} />
      <Footer style={styles.footer} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  nav: {
    flex: 2,
    borderWidth: 1,
    borderColor: 'red',
  },
  body: {
    flex: 17,
    borderWidth: 1,
    borderColor: 'red',
  },
  footer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
  }
});

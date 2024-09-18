import { View, StyleSheet } from 'react-native';

function Body() {
  return(
    <View style={styles.container}>

    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  container: {
    flex: 12,
    borderWidth: 1,
    borderColor: 'red',
  }
});
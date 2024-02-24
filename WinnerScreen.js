import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const WinnerScreen = ({ navigation, route }) => {
  const { attempts } = route.params;

  return (
    <View style={styles.container}>
      <Text>Congratulations! You've won in {attempts} attempts!</Text>
      <Button title="Play Again" onPress={() => navigation.navigate('Game')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WinnerScreen;
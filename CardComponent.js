import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CardComponent = ({ cardData, onCardPress }) => {
  const { image, isFlipped } = cardData;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onCardPress}>
      <View style={styles.cardInner}>
        {isFlipped ? (
          <Image source={image} style={styles.cardImage} />
        ) : (
          <Image source={require('../assets/card-back.png')} style={styles.cardImage} />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 100,
    height: 150,
    margin: 5,
  },
  cardInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 10,
  },
  cardImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default CardComponent;
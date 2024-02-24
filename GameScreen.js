import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import CardComponent from '../components/CardComponent';

const cards = [
  require('../assets/card1.png'),
  require('../assets/card2.png'),
  require('../assets/card3.png'),
  require('../assets/card4.png'),
  require('../assets/card5.png'),
  require('../assets/card6.png'),
];

const GameScreen = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const initializeGame = () => {
    const initialCards = [...cards, ...cards].sort(() => Math.random() - 0.5).map((card, index) => ({
      id: index,
      image: card,
      isFlipped: false,
    }));
    setSelectedCards(initialCards);
    setMatchedCards([]);
    setAttempts(0);
  };

  const handleCardPress = (cardId) => {
    if (selectedCards.filter(card => card.isFlipped).length === 2) return;
    const updatedCards = selectedCards.map(card =>
      card.id === cardId ? { ...card, isFlipped: true } : card
    );
    setSelectedCards(updatedCards);
    checkForMatch(updatedCards.filter(card => card.isFlipped));
  };

  const checkForMatch = (flippedCards) => {
    if (flippedCards.length === 2) {
      setAttempts(attempts + 1);
      if (flippedCards[0].image !== flippedCards[1].image) {
        setTimeout(() => {
          setSelectedCards(selectedCards.map(card =>
            card.isFlipped ? { ...card, isFlipped: false } : card
          ));
        }, 1000);
      } else {
        setMatchedCards([...matchedCards, flippedCards[0].id]);
        if (matchedCards.length === cards.length) {
          setTimeout(() => {
            Alert.alert('Congratulations!', 'You won in ${attempts} attempts!');
            initializeGame();
          }, 500);
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCards}
        numColumns={4}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item.id)} style={styles.cardContainer}>
            <Image
              source={item.isFlipped || matchedCards.includes(item.id) ? item.image : require('../assets/card-back.png')}
              style={styles.cardImage}
            />
          </TouchableOpacity>
        )}
      />
      <Button title="Restart Game" onPress={initializeGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  cardContainer: {
    width: 70,
    height: 100,
    margin: 5,
  },
  cardImage: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default GameScreen;
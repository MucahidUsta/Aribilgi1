
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const NewsDetailScreen = ({ navigation }) => {
  const newsItem = navigation.getParam('newsItem', {});

  return (
    <View style={{alignItems:"center",justifyContent:"center"}}>
      <Image source={{ uri: newsItem.urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{newsItem.title}</Text>
        <Text style={styles.description}>{newsItem.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    backgroundColor:"#dee2e6" ,
    padding: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 20,
    marginTop:50
  },
});

export default NewsDetailScreen;

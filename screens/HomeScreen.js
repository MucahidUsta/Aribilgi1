import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image,TextInput } from 'react-native';
import { getNews } from '../src/services/index';



const NewsCard = ({ newsItem, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: newsItem.urlToImage }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{newsItem.title}</Text>
        <Text style={styles.description}>{newsItem.description}</Text>
      </View>
    </TouchableOpacity>
  );
  
  const HomeScreen = ({ navigation }) => {
    const [news, setNews] = useState([]);
    const category = navigation.getParam('category', 'General');
  
    useEffect(() => {
      const fetchNews = async () => {
        const data = await getNews();
        const filteredNews = category === 'General'
          ? data
          : data.filter(item => item.category === category);
        setNews(filteredNews);
      };
  
      fetchNews();
    }, [category]);
  
    const navigateToDetail = (item) => {
      navigation.navigate('NewsDetail', { newsItem: item });
    };
  
    return (
      <View >
        <FlatList
          data={news}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <NewsCard newsItem={item} onPress={() => navigateToDetail(item)} />
          )}
        />
      </View>
    );
  };
  
  


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

export default HomeScreen;

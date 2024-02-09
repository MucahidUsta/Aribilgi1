import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../styles/index';

const CategoryFilterScreen = ({ navigation }) => {
    const categories = ['General', 'Business', 'Technology', 'Science', 'Health', 'Sports'];
  
    const handleCategoryPress = (category) => {
      navigation.navigate('Home', { category });
    };
  
    return (
      <View style={appStyles.container}>
        <Text style={appStyles.title}>Select a Category:</Text>
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            onPress={() => handleCategoryPress(category)}
            style={appStyles.button}
          >
            <Text style={appStyles.buttonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  
  export default CategoryFilterScreen;
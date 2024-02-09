
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const categories = ['General', 'Business', 'Technology', 'Science', 'Health', 'Sports'];
  const [selectedCategory, setSelectedCategory] = useState('General');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    navigation.navigate('Home', { category });
  };

  return (
    <View>
      <Text>Select a Category:</Text>
      {categories.map((category) => (
        <TouchableOpacity key={category} onPress={() => handleCategoryPress(category)}>
          <Text style={{ color: selectedCategory === category ? 'blue' : 'black' }}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CategoryScreen;

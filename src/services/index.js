
import axios from 'axios';

const API_KEY = '96dc2f4eaf544f0698b8fa8707e9cd1d';
const BASE_URL = 'https://newsapi.org/v2';

export const getNews = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/top-headlines`, {
        params: {
          country: 'us',
          apiKey: API_KEY,
        },
      });
  
    
      const newsWithCategories = response.data.articles.map(item => ({
        ...item,
        category: 'General',
      }));
  
      return newsWithCategories;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  };

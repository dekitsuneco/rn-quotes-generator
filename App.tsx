import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from './src/components/Card';

const API_URL = 'https://api.quotable.io/random';

interface ApiData {
  _id: string;
  tags: Array<string>,
  content: string;
  author: string;
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const [isLoading, setIsLoading] = useState(true);


  const fetchQuote = async (url: string) => {
    try {
      setIsLoading(true);

      const response = await axios.get<ApiData>(url);
      const data = response.data;
      
      setQuote(data.content);
      setAuthor(data.author);

      setIsLoading(false);  
    } catch (error) {
      setIsLoading(false);  

      alert(error);
    } 
  };

  const handleRefrechClick = (url: string) => () => fetchQuote(url);

  useEffect(() => {
    fetchQuote(API_URL);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Card
        quote={quote}
        author={author}
        loading={isLoading}
        style={styles.card}
        onRefreshClick={handleRefrechClick(API_URL)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5372F0', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%'
  }
});

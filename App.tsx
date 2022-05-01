import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from './src/components/Card';
import * as Speech from 'expo-speech';
import { variables } from './src/styles';
import { API_URL, LANGUAGE, APIData } from './src/configuration';

export default function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const [isSpeaking ,setIsSpeaking] = useState(false);

  const fetchQuote = async (url: string) => {
    try {
      setIsLoading(true);

      const response = await axios.get<APIData>(url);
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
    //fetchQuote(API_URL);
  }, []);

  const speak = (): void => {
    Speech.stop();
    Speech.speak(
      `${quote} by ${author}`,
      { 
        language: LANGUAGE,
        onStart: () => setIsSpeaking(true),
        onDone: () => setIsSpeaking(false),
      });
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Card
        quote={quote}
        author={author}
        loading={isLoading}
        speaking={isSpeaking}
        onSpeak={speak}
        style={styles.card}
        onRefreshClick={handleRefrechClick(API_URL)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.color.primary, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%'
  },
});

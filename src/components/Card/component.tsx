import React, { ReactElement } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import { variables } from '../../styles';
import { AppButton } from '../AppButton';
import { Header } from '../Header';
import { Icon } from '../Icon';
import { Quote } from '../Quote';

interface CardProps {
  quote: string;
  author: string;
  loading: boolean;
  onRefreshClick: () => Promise<void>;
  style?: StyleProp<ViewStyle>;
}

export function Card({
  quote,
  author,
  loading: isLoading,
  onRefreshClick: handleClick,
  style: customStyles = {}
}: CardProps): ReactElement {
  return (
    <View style={[styles.card, customStyles]}>
      <Header 
        title={'Quote of the day'}
        style={styles.header} 
      />
      {
        isLoading
        ? <ActivityIndicator
            color={'#5372F0'}
            style={indicatorStyles.indicator}
          />
        : (
          <Quote 
            quote={quote}
            author={author}
            style={quoteStyles} 
          />
          )  
      }
      <AppButton
        title={'Refresh'} 
        style={buttonStyles} 
        onClick={handleClick}
      />
      <View style={styles.iconBar}>
        <Icon icon={'volume-up'} />
        <Icon icon={'copy'} />
        <Icon icon={'twitter'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 30,
    backgroundColor: variables.color.secondary,
    borderRadius: 20,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});

const quoteStyles = StyleSheet.create({
  section: {
    marginBottom: 20,
  },
});

const indicatorStyles = StyleSheet.create({
  indicator: {
    marginBottom: 20,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    marginBottom: 20,
  },
});

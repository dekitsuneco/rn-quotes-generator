import React, { ReactElement } from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextProps, 
  StyleProp, 
  TextStyle, 
  ViewStyle } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { variables } from '../../styles';

interface QuoteCustomStyles {
  section?: StyleProp<ViewStyle>;
  quote?: StyleProp<TextStyle>;
  quoteAuthor?: StyleProp<TextStyle>;
}

interface QuoteProps extends Omit<TextProps, 'style'>{
  quote: string;
  author: string;
  style?: QuoteCustomStyles;
}

export function Quote({
  quote,
  author,
  style: customStyles = {},
}: QuoteProps): ReactElement {
  return (
    <View style={customStyles?.section}>
      <FontAwesome5 name='quote-left' color={'red'} style={styles.quoteIcon} />
      <Text style={[styles.quote, customStyles?.quote]}>
        {quote}
      </Text>
      <FontAwesome5 name='quote-right' color={'red'} style={[styles.quoteIcon, styles.quoteIconTrailing]} />
      <Text style={[styles.quoteAuthor, customStyles?.quoteAuthor]}>
        {`—${author}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {},
  quote: {
    marginBottom: 10,
    color: variables.color.textInverse,
    fontSize: variables.fontSize.smaller,
    fontWeight: '400',
    lineHeight: 26,
    letterSpacing: 1.1,
    textAlign: 'center'
  },
  quoteAuthor: {
    color: variables.color.textInverse,
    fontSize: variables.fontSize.smaller,
    fontStyle: 'italic',
    fontWeight: '300',
    textAlign: 'right',
  },
  quoteIcon: {
    fontSize: variables.fontSize.medium,
  },
  quoteIconTrailing: {
    textAlign: 'right',
  },
});

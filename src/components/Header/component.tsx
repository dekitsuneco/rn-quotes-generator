import React, { ReactElement } from 'react'
import { 
  Text, 
  StyleSheet, 
  TextProps, 
  StyleProp, 
  TextStyle } from 'react-native';
import { variables } from '../../styles';

interface HeaderProps extends TextProps{
  title: string;
  style?: StyleProp<TextStyle>;
}

export function Header({
  title,
  style: customStyles = {},
}: HeaderProps): ReactElement {
  return (
    <Text style={[styles.header, customStyles]}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: variables.fontSize.big,
    fontWeight: 'bold',
    color: variables.color.textSecondary,
  },
});

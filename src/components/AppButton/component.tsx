import React, { ReactElement } from 'react'
import { Text, StyleSheet, StyleProp, TextStyle, TouchableOpacityProps, TouchableOpacity, ViewStyle } from 'react-native';
import { variables } from '../../styles';

interface AppButtonCustomStyles {
  button?: ViewStyle;
  title?: StyleProp<TextStyle>;
}

interface AppButtonProps extends Omit<TouchableOpacityProps, 'style'>{
  title: string;
  onClick: () => Promise<void>;
  style?: AppButtonCustomStyles;
}

export function AppButton({
  title,
  onClick: handlePress,
  style: customStyles = {},
}: AppButtonProps): ReactElement {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={[styles.button, customStyles.button]}>
      <Text style={[styles.title, customStyles.title]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: variables.color.primary,
    borderRadius: 30
  },
  title: {
    color: variables.color.text,
    fontSize: variables.fontSize.small,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
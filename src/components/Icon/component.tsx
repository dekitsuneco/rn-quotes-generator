import React, { ReactElement } from 'react'
import { 
  Text, 
  TouchableOpacity,
  StyleSheet, 
  ColorValue, 
  ViewStyle, 
  StyleProp } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { variables } from '../../styles';

interface IconCharProps {
  size?: number;
  color?: ColorValue;
}

interface IconProps {
  icon: string;
  onPress: () => void;
  iconProps?: IconCharProps;
  style?: StyleProp<ViewStyle>;
}

export function Icon({
  icon,
  onPress: handlePress,
  iconProps,
  style: customStyles = {},
}: IconProps): ReactElement {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.iconTouchable, customStyles]}
    >
      <FontAwesome5 name={icon} size={22} color={'red'} {...iconProps} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconTouchable: {
    padding: 15,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: variables.color.primary,
  },
});

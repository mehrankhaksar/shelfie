import { Text, useColorScheme } from "react-native";
import { colors } from "../constants/colors";

const ThemedText = ({ style, isTitle = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  const color = isTitle ? theme.text.primary : theme.text.secondary;

  return <Text style={[{ color }, style]} {...props} />;
};

export default ThemedText;

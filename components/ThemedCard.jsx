import { useColorScheme, View } from "react-native";
import { colors } from "../constants/colors";

const ThemedCard = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <View
      style={[
        {
          backgroundColor: theme.bg.elevated,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedCard;

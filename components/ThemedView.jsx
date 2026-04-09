import { useColorScheme, View } from "react-native";
import { colors } from "../constants/colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ThemedView = ({ style, safe = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;
  const inset = useSafeAreaInsets();

  if (!safe)
    return (
      <View
        style={[
          {
            backgroundColor: theme.bg.base,
          },
          style,
        ]}
        {...props}
      />
    );

  return (
    <View
      style={[
        {
          backgroundColor: theme.bg.base,
          paddingTop: inset.top + 50,
          paddingBottom: inset.bottom,
          paddingHorizontal: 20,
          flex: 1,
        },
        style,
      ]}
      {...props}
    />
  );
};

export default ThemedView;

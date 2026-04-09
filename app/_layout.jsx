import { Stack } from "expo-router";
import { colors } from "../constants/colors";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import UserProvider from "../contexts/UserContext";

const Layout = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <UserProvider>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.bg.subtle,
          },
          headerTintColor: theme.text.primary,
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(dashboard)" />
      </Stack>
    </UserProvider>
  );
};

export default Layout;

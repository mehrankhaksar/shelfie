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
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
    </UserProvider>
  );
};

export default Layout;

import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";
import BooksProvider from "../../contexts/BooksContext";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = colors[colorScheme] ?? colors.light;

  return (
    <UserOnly>
      <BooksProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.bg.subtle,
              paddingTop: 5,
              height: 110,
            },
            tabBarActiveTintColor: theme.icon.active,
            tabBarInActiveTintColor: theme.icon.default,
          }}
        >
          <Tabs.Screen
            name="profile"
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "person" : "person-outline"}
                  size={24}
                  color={focused ? theme.icon.active : theme.icon.default}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="books"
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "book" : "book-outline"}
                  size={24}
                  color={focused ? theme.icon.active : theme.icon.default}
                />
              ),
            }}
          />
          <Tabs.Screen
            name="createNewBook"
            options={{
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "create" : "create-outline"}
                  size={24}
                  color={focused ? theme.icon.active : theme.icon.default}
                />
              ),
            }}
          />
        </Tabs>
      </BooksProvider>
    </UserOnly>
  );
};

export default DashboardLayout;

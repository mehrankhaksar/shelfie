import { StyleSheet, Text } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import { Link } from "expo-router";
import ThemedButton from "../components/ThemedButton";
import GuestOnly from "../components/auth/GuestOnly";

const Home = () => {
  return (
    <GuestOnly>
      <ThemedView safe>
        <ThemedView style={styles.container}>
          <ThemedLogo />
          <ThemedText style={styles.title}>The Number 1</ThemedText>
          <ThemedText style={{ fontWeight: "600" }}>
            Reading List App
          </ThemedText>
        </ThemedView>
        <Link href="/login" asChild>
          <ThemedButton style={{ width: "100%" }}>
            <Text style={{ color: "#f2f2f2", textAlign: "center" }}>
              Login Page
            </Text>
          </ThemedButton>
        </Link>
      </ThemedView>
    </GuestOnly>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
});

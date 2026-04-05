import { StyleSheet } from "react-native";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import ThemedText from "../components/ThemedText";
import { Link } from "expo-router";

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <ThemedText style={styles.title}>The Number 1</ThemedText>
      <ThemedText style={{ fontWeight: "600" }}>Reading List App</ThemedText>
      <Link href="/profile">Profile Page</Link>
    </ThemedView>
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

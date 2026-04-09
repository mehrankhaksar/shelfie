import { StyleSheet, Text } from "react-native";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";
import ThemedText from "../../components/ThemedText";
import ThemedButton from "../../components/ThemedButton";
import ThemedCard from "../../components/ThemedCard";
import { colors } from "../../constants/colors";

const Profile = () => {
  const { user, logout } = useUser();

  return (
    <ThemedView style={styles.container} safe>
      <ThemedCard>
        <ThemedText style={styles.heading} isHeading>
          {user.email}
        </ThemedText>
        <ThemedText>Time to start reading some books...</ThemedText>
        <ThemedButton style={styles.logoutBtn} onPress={logout}>
          <Text style={{ fontSize: 12, color: "#f2f2f2" }}>Logout</Text>
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logoutBtn: {
    backgroundColor: colors.brand.danger,
    padding: 12,
    marginTop: 15,
  },
});

import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import ThemedButton from "../../components/ThemedButton";
import { Link } from "expo-router";
import { colors } from "../../constants/colors";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useUser();

  const onSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <ThemedView style={styles.container} safe>
            <ThemedText isHeading style={styles.title}>
              Login to Your Account
            </ThemedText>
            <ThemedTextInput
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <ThemedTextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <ThemedButton onPress={onSubmit}>
              <Text style={{ color: "#f2f2f2" }}>Login</Text>
            </ThemedButton>
            {error && <Text style={styles.error}>{error}</Text>}
            <Link href="/register" replace>
              <ThemedText style={{ textDecorationLine: "underline" }}>
                Register instead
              </ThemedText>
            </Link>
          </ThemedView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: colors.brand.danger,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: colors.brand.danger,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});

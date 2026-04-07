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
import { useUser } from "../../hooks/useUser";
import { colors } from "../../constants/colors";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useUser();

  const onSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
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
            <ThemedText isTitle style={styles.title}>
              Register an Account
            </ThemedText>
            <ThemedTextInput
              style={{ width: "85%" }}
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <ThemedTextInput
              style={{ width: "85%" }}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <ThemedButton onPress={onSubmit}>
              <Text style={{ color: "#f2f2f2" }}>Register</Text>
            </ThemedButton>
            {error && <Text style={styles.error}>{error}</Text>}
            <Link href="/login" replace>
              <ThemedText style={{ textDecorationLine: "underline" }}>
                Login instead
              </ThemedText>
            </Link>
          </ThemedView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  title: {
    fontSize: 18,
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

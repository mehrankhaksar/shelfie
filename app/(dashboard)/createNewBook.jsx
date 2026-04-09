import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";
import { useBooks } from "../../hooks/useBooks";

const CreateNewBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const { createNewBook, isLoading } = useBooks();
  const router = useRouter();

  const onSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim()) return;

    await createNewBook({ title, author, description });

    setTitle("");
    setAuthor("");
    setDescription("");

    router.replace("/books");
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
              Add a New Book
            </ThemedText>

            <ThemedTextInput
              placeholder="Book Title"
              value={title}
              onChangeText={setTitle}
            />

            <ThemedTextInput
              placeholder="Book Author"
              value={author}
              onChangeText={setAuthor}
            />

            <ThemedTextInput
              style={styles.textarea}
              placeholder="Book Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />

            <ThemedButton onPress={onSubmit} disabled={isLoading}>
              <Text style={{ color: "#fff" }}>
                {isLoading ? "Saving..." : "Create Book"}
              </Text>
            </ThemedButton>
          </ThemedView>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CreateNewBook;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
  },

  textarea: {
    minHeight: 150,
    textAlignVertical: "top",
  },
});

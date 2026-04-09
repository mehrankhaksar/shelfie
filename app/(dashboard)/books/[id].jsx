import { StyleSheet } from "react-native";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { useBooks } from "../../../hooks/useBooks";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../../constants/colors";

const BookDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [book, setBook] = useState(null);
  const { getBook, deleteBook, isLoading } = useBooks();

  const onDeleteBook = async () => {
    await deleteBook(id);
    setBook(null);
    router.replace("/books");
  };

  useEffect(() => {
    const loadBook = async () => {
      const book = await getBook(id);
      setBook(book);
    };
    loadBook();
    return () => setBook(null);
  }, [id]);

  if (isLoading || !book) return <ThemedLoader />;

  return (
    <ThemedView safe>
      <ThemedCard style={styles.card}>
        <ThemedText title={true} style={styles.title}>
          {book.title}
        </ThemedText>
        <ThemedText style={styles.subTitle}>
          Written by {book.author}
        </ThemedText>
        <ThemedText title={true}>Book description:</ThemedText>
        <ThemedText style={{ fontWeight: "500" }}>
          {book.description}
        </ThemedText>
        <ThemedButton style={styles.deleteBtn} onPress={onDeleteBook}>
          <Ionicons name="trash" size={20} color="#f2f2f2" />
        </ThemedButton>
      </ThemedCard>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    position: "relative",
    alignItems: "flex-start",
  },
  subTitle: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: "600",
  },
  deleteBtn: {
    top: -15,
    right: -15,
    position: "absolute",
    borderRadius: "100%",
    padding: 5,
    backgroundColor: colors.brand.danger,
  },
});

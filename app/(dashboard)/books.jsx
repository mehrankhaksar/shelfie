import { FlatList, Pressable, StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import { useBooks } from "../../hooks/useBooks";
import { colors } from "../../constants/colors";
import { useRouter } from "expo-router";

const Books = () => {
  const router = useRouter();
  const { books } = useBooks();

  return (
    <ThemedView safe>
      <ThemedText title={true} style={styles.heading}>
        Your Reading List
      </ThemedText>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title} isTitle>
                {item.title}
              </ThemedText>
              <ThemedText>Written by {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 50,
  },
  list: {
    gap: 20,
  },
  card: {
    padding: 10,
    gap: 10,
    alignItems: "flex-start",
    borderLeftWidth: 4,
    borderLeftColor: colors.brand.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

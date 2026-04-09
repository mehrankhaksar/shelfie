import { FlatList, Pressable, StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import { useBooks } from "../../hooks/useBooks";
import { colors } from "../../constants/colors";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Books = () => {
  const router = useRouter();
  const { books } = useBooks();

  return (
    <ThemedView safe>
      <ThemedText isHeading style={styles.heading}>
        Your Reading List
      </ThemedText>
      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/books/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={{ fontWeight: "bold" }} isHeading>
                {item.title}
              </ThemedText>
              <ThemedText style={{ fontSize: 12 }}>
                Written by {item.author}
              </ThemedText>
            </ThemedCard>
          </Pressable>
        )}
        ListEmptyComponent={
          <ThemedCard style={styles.emptyCard}>
            <Ionicons
              name="library-outline"
              size={48}
              color={colors.brand.primary}
            />
            <ThemedText isHeading style={styles.emptyTitle}>
              No books yet
            </ThemedText>
            <ThemedText style={styles.emptySubtitle}>
              Start adding books before your future self judges you
            </ThemedText>
          </ThemedCard>
        }
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
    marginBottom: 25,
  },
  card: {
    padding: 10,
    gap: 5,
    alignItems: "flex-start",
    borderLeftWidth: 4,
    borderLeftColor: colors.brand.primary,
  },

  emptyCard: {
    marginHorizontal: 50,
    gap: 10,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },

  emptySubtitle: {
    textAlign: "center",
    fontSize: 12,
  },
});

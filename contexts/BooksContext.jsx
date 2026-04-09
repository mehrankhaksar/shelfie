import { createContext, useEffect, useState } from "react";
import { client, databases } from "../lib/appWrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();
const DB_ID = process.env.EXPO_PUBLIC_DB_ID;
const BOOK_COLLECTION_ID = process.env.EXPO_PUBLIC_BOOK_COLLECTION_ID;

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();

  const getBook = async (id) => {
    setIsLoading(true);
    try {
      const response = await databases.getDocument({
        databaseId: DB_ID,
        collectionId: BOOK_COLLECTION_ID,
        documentId: id,
      });
      return response;
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const getBooks = async () => {
    setIsLoading(true);
    try {
      const response = await databases.listDocuments({
        databaseId: DB_ID,
        collectionId: BOOK_COLLECTION_ID,
        queries: [Query.equal("userId", user.$id)],
      });
      setBooks(response.documents);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const createNewBook = async (data) => {
    setIsLoading(true);
    try {
      await databases.createDocument({
        databaseId: DB_ID,
        collectionId: BOOK_COLLECTION_ID,
        documentId: ID.unique(),
        data: { ...data, userId: user.$id },
        permissions: [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ],
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteBook = async (id) => {
    setIsLoading(true);
    try {
      await databases.deleteDocument({
        databaseId: DB_ID,
        collectionId: BOOK_COLLECTION_ID,
        documentId: id,
      });
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DB_ID}.collections.${BOOK_COLLECTION_ID}.documents`;
    if (user) {
      getBooks();
      unsubscribe = client.subscribe(channel, ({ payload, events }) => {
        if (events[0].includes("create")) {
          setBooks((prev) => [...prev, payload]);
        }
        if (events[0].includes("delete")) {
          setBooks((prev) => prev.filter((book) => book.$id !== payload.$id));
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{ books, isLoading, getBook, createNewBook, deleteBook }}
    >
      {children}
    </BooksContext.Provider>
  );
}

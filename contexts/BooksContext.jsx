import { createContext, useState } from "react";
import { databases } from "../lib/appWrite";
import { ID, Permission, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

export const BooksContext = createContext();

export default function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUser();

  const createNewBook = async (data) => {
    setIsLoading(true);
    try {
      await databases.createDocument({
        databaseId: process.env.EXPO_PUBLIC_DB_ID,
        collectionId: process.env.EXPO_PUBLIC_BOOK_COLLECTION_ID,
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

  return (
    <BooksContext.Provider value={{ books, isLoading, createNewBook }}>
      {children}
    </BooksContext.Provider>
  );
}

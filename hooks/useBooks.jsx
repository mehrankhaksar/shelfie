import { useContext } from "react";
import { BooksContext } from "../contexts/BooksContext";

export function useBooks() {
  const context = useContext(BooksContext);

  if (!context) throw Error("useBooks must be used within a BooksProvider");

  return context;
}

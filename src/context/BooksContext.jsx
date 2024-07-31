import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const defaultBooks = [
  {
    id: 1,
    title: "Pride and Prejudice",
    isbn: "978-0141439518",
    published: "1813-01-28",
    coverImage: "https://m.media-amazon.com/images/I/81h36FJn2JL._SY466_.jpg",
    about:
      "Pride and Prejudice, romantic novel by Jane Austen, published anonymously in three volumes in 1813. A classic of English literature, written with incisive wit and superb character delineation, it centers on the burgeoning relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner.",
    author: {
      name: "	Jane Austen",
      birth: "1775-12-16",
      image:
        "https://cdn.britannica.com/12/172012-050-DAA7CE6B/Jane-Austen-Cassandra-engraving-portrait-1810.jpg",
      biography:
        "Jane Austen was an English writer who first gave the novel its distinctly modern character through her treatment of ordinary people in everyday life.",
    },
  },
  {
    id: 2,
    title: "To Kill a Mockingbird ",
    isbn: "978-0446310789",
    published: "1960-07-11",
    coverImage:
      "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg",
    about:
      "To Kill a Mockingbird has become a classic of modern American literature; a year after its release, it won the Pulitzer Prize. The plot and characters are loosely based on Lee's observations of her family, her neighbors and an event that occurred near her hometown of Monroeville, Alabama, in 1936, when she was ten.",
    author: {
      name: "	Harper Lee",
      birth: "1926-04-28",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg/330px-Photo_portrait_of_Harper_Lee_%28To_Kill_a_Mockingbird_dust_jacket%2C_1960%29.jpg",
      biography:
        "Nelle Harper Lee is the author of one of the most affecting and widely read books of American literature. In creating To Kill a Mockingbird (1960), Lee drew deeply and essentially from her coming-of-age years in the small town of Monroeville, Monroe County, Alabama. ",
    },
  },
];

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(defaultBooks);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BooksContext.Provider value={{ books, addBook, editBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
};

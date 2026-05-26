import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import SearchBar from "./Components/Searchbar";
import GenreFilter from "./Components/GenreFilter";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import Loading from "./Components/Loading";
import ErrorMessage from "./Components/ErrorMessage";

import {
  getBooks,
  addBook,
  updateBook,
  deleteBook,
} from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [editingBook, setEditingBook] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);   

  // Fetch Books
  const fetchBooks = async () => {
    try {
      setLoading(true);

      const data = await getBooks();

      setBooks(data);
    } catch (error) {
      setError("Failed to fetch books");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add Book
  const handleAddBook = async (book) => {
    await addBook(book);
    fetchBooks();
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);     // save which book to delete
    setShowModal(true);    // open popup
  };

  const confirmDelete = async () => {
    await deleteBook(selectedId); // call API delete

    // remove from UI
    setBooks((prev) =>
      prev.filter((book) => book.id !== selectedId)
    );

    setShowModal(false); // close modal
    setSelectedId(null); // reset
  };

  // Update Book
  const handleUpdateBook = async (book) => {
    await updateBook(editingBook.id, book);

    setEditingBook(null);

    fetchBooks();
  };

  // Delete Book
  const handleDeleteBook = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this book?"
    );

    if (confirmDelete) {
      await deleteBook(id);
      fetchBooks();
    }
  };

  // Search + Filter
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      book.author
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesGenre =
      genre === "" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div>
      <Navbar />

      <div className="container py-5">
        {/* Search + Filter */}
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          </div>

          <div className="col-md-6">
            <GenreFilter
              genre={genre}
              setGenre={setGenre}
            />
          </div>
        </div>

        {/* Form */}
        <BookForm
          onAddBook={handleAddBook}
          onUpdateBook={handleUpdateBook}
          editingBook={editingBook}
        />

        {/* Loading */}
        {loading && <Loading />}

        {/* Error */}
        {error && (
          <ErrorMessage message={error} />
        )}

        {/* Books */}
        {!loading && (
          <BookList
            books={filteredBooks}
            onEdit={setEditingBook}
            onDelete={handleDeleteBook}
          />
        )}
      </div>
    </div>
  );
}

export default App;

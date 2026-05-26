import { useState, useEffect } from "react";

function BookForm({ onAddBook, onUpdateBook, editingBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    if (editingBook) setBook(editingBook);
  }, [editingBook]);

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!book.title || !book.author || !book.genre || !book.year) {
      alert("Please fill all fields");
      return;
    }

    editingBook ? onUpdateBook(book) : onAddBook(book);

    setBook({ title: "", author: "", genre: "", year: "" });
  };

  return (
    <div className="form-card">
      <h3 className="text-center mb-4">
        {editingBook ? "Edit Book" : "Add Book"}
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-3">
            <input
              className="form-control ui-input"
              placeholder="Title"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control ui-input"
              placeholder="Author"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control ui-input"
              placeholder="Genre"
              name="genre"
              value={book.genre}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control ui-input"
              placeholder="Year"
              name="year"
              value={book.year}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-1">
            <button className="btn btn-primary w-100">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BookForm;
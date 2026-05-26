function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="book-card">
      <h4 className="text-primary">
        {book.title || book.tittle}
      </h4>

      <p><b>Author:</b> {book.author}</p>
      <p><b>Genre:</b> {book.genre}</p>
      <p><b>Year:</b> {book.year}</p>

      <div className="d-flex gap-2">
        <button
          className="btn btn-warning w-50"
          onClick={() => onEdit(book)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger w-50"
          onClick={() => onDelete(book.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BookCard;
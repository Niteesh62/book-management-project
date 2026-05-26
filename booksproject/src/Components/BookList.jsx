import BookCard from "./BookCard";

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="row mt-4">
      {books.map((book) => (
        <div className="col-md-4 mb-4" key={book.id}>
          <BookCard
            book={book}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      ))}
    </div>
  );
}

export default BookList;
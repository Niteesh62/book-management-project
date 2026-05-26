function GenreFilter({ genre, setGenre }) {
  return (
    <select
      className="form-select ui-input"
      value={genre}
      onChange={(e) => setGenre(e.target.value)}
    >
      <option value="">All Genres</option>
      <option value="Fiction">Fiction</option>
      <option value="Self Help">Self Help</option>
      <option value="Science">Science</option>
      <option value="Biography">Biography</option>
    </select>
  );
}

export default GenreFilter;
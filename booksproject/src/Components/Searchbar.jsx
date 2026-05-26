function SearchBar({ search, setSearch }) {
  return (
    <input
      className="form-control ui-input"
      placeholder="Search by title or author..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
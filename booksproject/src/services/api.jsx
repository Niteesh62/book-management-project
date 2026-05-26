const BASE_URL =
  "https://6a1544d891ff9a63de07c487.mockapi.io/bookmanagement/books";

export const getBooks = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addBook = async (book) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });

  return response.json();
};

export const updateBook = async (id, updatedBook) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBook),
  });

  return response.json();
};

export const deleteBook = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
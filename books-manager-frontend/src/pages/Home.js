import React, { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch("/api/books");
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };
    fetchBooks();
  }, []);

  console.log([...Array(8)]);

  return (
    <div className="container mx-auto px-4 mt-28">
      <h3 className="text-3xl text-amber-900 mb-6">Books</h3>
      <div className="flex gap-2">
        {books.map((book, idx) => (
          <div className="p-6 bg-slate-300" key={idx}>
            <p className="text-primary text-2xl font-medium ">
              {book.title}
            </p>
            <p className="text-secondary">{book.author}</p>
            <div className="flex items-baseline">
                <RiStarSFill />
                <span>{book.rating}/10</span>
              </div>
            <p>Genre: {book.genres.map(item => (
              <p>{item}</p>

            ))}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

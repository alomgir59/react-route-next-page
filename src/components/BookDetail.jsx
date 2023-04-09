import React from "react";
import { useLoaderData } from "react-router-dom";

const BookDetail = () => {
  const book = useLoaderData();
  console.log(book);
  return (
    <div>
      <h1>Book Details Page</h1>
    </div>
  );
};

export default BookDetail;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BooksProvider } from "./context/BooksContext";
import AddBookAuthor from "./components/AddBookAuthor";
import Dashboard from "./components/Dashboard";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  return (
    <>
      <BooksProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/create" element={<AddBookAuthor />} />
            <Route path="/create/:id" element={<AddBookAuthor />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/details/:id" element={<BookDetails />} />
          </Routes>
        </Router>
      </BooksProvider>
    </>
  );
};

export default App;

import React from "react";
import "./App.css";
import ErrorBoundary from "./ErrorBoundary";

export function Search() {
  return (
    <ErrorBoundary>
      <div className="search">
        <input className="search-text" placeholder="Search here" />
        <button className="search-button">Search</button>
      </div>
    </ErrorBoundary>
  );
}

export default Search;

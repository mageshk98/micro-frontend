import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";

function Form() {
  return (
    <ErrorBoundary>
      <div className="form">Form Component</div>
    </ErrorBoundary>
  );
}

export default Form;

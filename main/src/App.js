import React from "react";
import ErrorBoundary from "./ErrorBoundary";
// import Button from "Form/Button";
import "./App.css";
// const Button = React.lazy(() => import("Form/Button"));
// const Text = React.lazy(() => import("Form/Text"));
// const Search = React.lazy(() => import("Header/Search"));

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const App = () => (
  <div className="App">
    <h1>Main App Container</h1>
    <br />
    <RemoteWrapper>
      <h2>A Search bar from Header - Micro Frontend 1</h2>
      {/* <Search /> */}
    </RemoteWrapper>
    <br />
    <RemoteWrapper>
      <h2>App from Form - Micro frontend 2</h2>
      <form style={{ padding: "5%" }}>
        {/* <Text /> */}
        {/* <Button>Submit</Button> */}
      </form>
    </RemoteWrapper>
    <br />

    <br />
    <a href="http://localhost:3001" target="_blank" rel="noreferrer">
      Link to header
    </a>
    <br />
    <a href="http://localhost:3002" target="_blank" rel="noreferrer">
      Link to form
    </a>
  </div>
);

export default App;

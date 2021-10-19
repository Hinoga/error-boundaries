import React from "react";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import ContentOne from "./components/screens/ContentOne";

const App = () => {
  return (
    <div className="container">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Sidebar />
      </ErrorBoundary>
      <main className="content">
        <ErrorBoundary>
          <ContentOne />
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default App;

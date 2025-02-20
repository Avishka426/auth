// src/layouts/MainLayout.js
import React from "react";

function MainLayout({ children }) {
  return (
    <div>
      <header>Header Content</header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
}

export default MainLayout;
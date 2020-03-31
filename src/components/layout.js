import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="flex flex-col flex-1 max-w-4xl mx-auto px-4 py-8 md:p-8 w-full">
        {children}
      </main>

      <footer className="bg-main">
        <nav className="flex justify-between max-w-4xl mx-auto p-2 md:p-2 text-xs">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline text-white"
              href="https://www.linkedin.com/in/stevenmchenry01/"
            >
              Steven McHenry
            </a>
          </p>

          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://github.com/StevenMcHenry01"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

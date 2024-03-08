import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="border-2 h-20 flex pl-16">
      <div className="container flex items-center">
        <Link to="/">
          <h1 className="text-2xl font-semibold">Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

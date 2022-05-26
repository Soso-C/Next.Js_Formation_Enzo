import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex space-x-10 justify-center items-center bg-blue-600 text-white h-14">
      <Link href="/">
        <a>Accueil</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/users">
        <a>Liste</a>
      </Link>
      {/* <Link href="/randomwords">
        <a>Random Words</a>
      </Link>
      <Link href="/add">
        <a>Add Word</a>
      </Link> */}
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import S from "./style.module.scss";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => (useMatch(path) ? S.active : "");

  return (
    <header className={S.header}>
      <h1>&lt; Alan /&gt;</h1>
      <button
        className={`${S["hamburger-menu"]} ${isMenuOpen ? S.open : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`${S["nav-container"]} ${isMenuOpen ? S.open : ""}`}>
        <Link to="/" className={isActive("/")} onClick={closeMenu}>
          Home
        </Link>
        <Link
          to="/about-me"
          className={isActive("/about-me")}
          onClick={closeMenu}
        >
          Sobre mim
        </Link>
        <Link
          to="/certifications"
          className={isActive("/certifications")}
          onClick={closeMenu}
        >
          Certificados
        </Link>
        <Link
          to="/contact"
          className={isActive("/contact")}
          onClick={closeMenu}
        >
          Contate-me
        </Link>
      </nav>
    </header>
  );
}

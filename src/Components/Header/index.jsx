import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import S from "./style.module.scss";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

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
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/about-me" className={isActive("/about-me")}>
          Sobre mim
        </Link>
        <Link to="/certifications" className={isActive("/certifications")}>
          Certificados
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contate-me
        </Link>
      </nav>
    </header>
  );
}

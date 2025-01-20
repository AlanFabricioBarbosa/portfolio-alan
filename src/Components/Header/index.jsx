import { Link } from "react-router-dom";
import S from "./style.module.scss";

export default function Header() {
  return (
    <header className={S}>
      <h1>&lt;Alan/&gt;</h1>
      <nav className={S["nav-container"]}>
        <Link to="/">Home</Link>
        <Link to="/about-me">Sobre mim</Link>
        <Link to="/certifications">Certificados</Link>
        <Link to="/contact">Contate-me</Link>
      </nav>
    </header>
  );
}

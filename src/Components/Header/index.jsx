import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>&lt;Alan/&gt;</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-me">Sobre mim</Link>
        <Link to="/certifications">Certificados</Link>
        <Link to="/contact">Contate-me</Link>
      </nav>
    </header>
  );
}

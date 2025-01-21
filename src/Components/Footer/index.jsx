import { FaLinkedin, FaGithub } from "react-icons/fa";
import S from "./style.module.scss";

export default function Footer() {
  return (
    <footer className={S}>
      <div>
        <h3>&copy;2025 Alan Fabrício</h3>
        <ul>
          <li>
            <a
              href="https://github.com/AlanFabricioBarbosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/alanfabriciodev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

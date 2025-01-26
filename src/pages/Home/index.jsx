import { AnimatedBackground } from "animated-backgrounds";
import S from "./style.module.scss";

export default function Home() {
  return (
    <section>
      <AnimatedBackground animationName="starryNight" blendMode="normal" />
      <section className={S["home_text_container"]}>
        <div className={S["home_text_content"]}>
          <h2>
            {Array.from("Olá, sou Alan Fabrício!").map((char, index) => (
              <span
                key={index}
                style={{
                  marginRight: char === " " ? "1rem" : "0",
                }}
              >
                {char}
              </span>
            ))}
          </h2>
          <p>Bem-vindo ao meu portfólio!</p>
          <p>Sinta-se à vontade para explorá-lo.</p>
        </div>
      </section>
    </section>
  );
}

import Data from "../../data/education.json";
import S from "./style.module.scss";

export default function CardEducation() {
  return (
    <section className={S["card-container"]}>
      {Data.map((i) => (
        <section key={i.id} className={S["card"]}>
          <figure>
            <img src={i.img} alt={i.imgAlt} />
            <figcaption>{i.status}</figcaption>
          </figure>
          <section className={S["card-content"]}>
            <h3>{i.name}</h3>
            <a href={i.linkOrg} target="_blank" rel="noreferrer">
              {i.title}
            </a>
            <p>{i.description}</p>
          </section>
        </section>
      ))}
    </section>
  );
}

import Data from "../../data/education.json";

export default function CardEducation() {
  return (
    <section>
      {Data.map((i) => (
        <section key={i.id}>
          <figure>
            <img src={i.img} alt={i.imgAlt} />
            <div>
              <figcaption>{i.status}</figcaption>
              <figcaption>{i.nivel}</figcaption>
            </div>
          </figure>
          <section>
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

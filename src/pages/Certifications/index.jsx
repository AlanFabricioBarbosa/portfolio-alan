import CardEducation from "../../Components/CardEducations";
import S from "./style.module.scss";

export default function Certifications() {
  return (
    <>
      <section>
        <div className={S["text-certifications-container"]}>
          <h2>Certificações</h2>
          <p>
            Confira minhas formações como programador! Aqui estão os cursos e
            certificações que moldaram minha jornada e mantêm minhas habilidades
            sempre afiadas
          </p>
        </div>
        <CardEducation />
      </section>
    </>
  );
}

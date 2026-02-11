import mentoria from "./mentoria.module.scss";
import imgMentoria from "../../assets/imgMentoria/mentoria.jpg";
import compartilhe from "../../assets/imgMentoria/compartilhe.png";
import acompanhamento from "../../assets/imgMentoria/acompanhamento.png"

const Mentoria = () => {
  return (
    <main className={mentoria.mentoria}>
        <h1 className={mentoria.title}>Mentoria</h1>

        <section className={mentoria.section1}>
          <article className={mentoria.cardMentoria}>
            <img src={imgMentoria} alt="Imagem de mentoria" />

            <h2>Mentoria de Carreira e Emprego</h2>
            <p>Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho.</p>

            <button>Quero participar</button>
          </article>

          <article className={`${mentoria.cardMentoria} ${mentoria.cardCompartilhe}`}>
            <img src={compartilhe} alt="Imagem de pessoas" />

            <h2>Compartilhe Experiência</h2>
            <p>Oriente jovens e profissionais iniciantes em sua área.</p>

            <button>Quero participar</button>
          </article>

          <article className={mentoria.cardMentoria}>
            <img src={acompanhamento} alt="Imagem de pessoas" />

            <h2>Acompanhamento</h2>
            <p>Participe como guia em jornadas de aprendizado e desenvolvimento.</p>

            <button>Quero participar</button>
          </article>
        </section>
    </main>
  )
}

export default Mentoria;

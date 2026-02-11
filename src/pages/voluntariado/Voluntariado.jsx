import voluntariado from "./voluntariado.module.scss";
import mutirao from "../../assets/imgVoluntariado/mutirao.png";
import aulas from "../../assets/imgVoluntariado/aulas.jpg";
import esporte from "../../assets/imgVoluntariado/esporte.jpg";

const Voluntariado = () => {
  return (
    <main className={voluntariado.voluntariado}>
        <h1 className={voluntariado.title}>Voluntariado</h1>

        <section className={voluntariado.section1}>
          <article className={voluntariado.cardVoluntariado}>
            <img src={mutirao} alt="Imagem de caixa de reciclagem" />

            <h2>Mutirão de reciclagem</h2>
            <p>Coletar materiais recicláveis e orientar sobre descarte consciente.</p>

            <button>Quero participar</button>
          </article>

          <article className={`${voluntariado.cardVoluntariado} ${voluntariado.cardCompartilhe}`}>
            <img src={aulas} alt="Imagem de pessoas" />

            <h2>Aulas de Tecnologia</h2>
            <p>Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.</p>

            <button>Quero participar</button>
          </article>

          <article className={voluntariado.cardVoluntariado}>
            <img src={esporte} alt="Imagem de pessoas" />

            <h2>Esporte e Inclusão</h2>
            <p>Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.</p>

            <button>Quero participar</button>
          </article>
        </section>
    </main>
  )
}

export default Voluntariado;

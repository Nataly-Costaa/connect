import eventos from "./eventos.module.scss";
import jovens from "../../assets/imgEventos/jovens.jpg";
import tecnologia from "../../assets/imgEventos/tecnologia.jpg";
import carreira from "../../assets/imgEventos/carreira.png";

const Eventos = () => {
  return (
    <main className={eventos.eventos}>
        <h1 className={eventos.title}>Eventos & Palestras</h1>

        <section className={eventos.section1}>
          <article className={eventos.cardEventos}>
            <img src={jovens} alt="Imagem de pessoas" />

            <h2>Empoderando Jovens para o Futuro</h2>
            <p>Atividade: Palestra motivacional sobre liderança jovem e transformação social.</p>
            <p>Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.</p>

            <button>Quero participar</button>
          </article>

          <article className={`${eventos.cardEventos} ${eventos.cardCompartilhe}`}>
            <img src={tecnologia} alt="Imagem de pessoas" />

            <h2>Tecnologia que Transforma</h2>
            <p>Atividade: Workshop de introdução à programação e inovação digital.</p>
            <p>Impacto: Preparar jovens para o mercado de trabalho através da tecnologia.</p>

            <button>Quero participar</button>
          </article>

          <article className={eventos.cardEventos}>
            <img src={carreira} alt="Imagem de pessoas" />

            <h2>Carreira e Primeiro Emprego</h2>
            <p>Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.</p>
            <p>Impacto: Ajudar jovens a conquistar oportunidades de trabalho.</p>

            <button>Quero participar</button>
          </article>
        </section>
    </main>
  )
}

export default Eventos;

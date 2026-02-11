import doacao from "./doacao.module.scss";
import instituto from "../../assets/imgDoacao/instituto.jpg";
import projeto from "../../assets/imgDoacao/projeto.jpg";
import conecta from "../../assets/imgDoacao/conecta.jpg";

const Doacao = () => {
  return (
    <main className={doacao.doacao}>
        <h1 className={doacao.title}>Doação</h1>

        <section className={doacao.section1}>
          <article className={doacao.cardDoacao}>
            <img src={instituto} alt="Imagem de pessoas" />

            <h2>Instituto grande familia</h2>
            <p>Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.</p>

            <button>Quero participar</button>
          </article>

          <article className={`${doacao.cardDoacao} ${doacao.cardCompartilhe}`}>
            <img src={projeto} alt="Imagem de livros" />

            <h2>Projeto Futuro na Escola</h2>
            <p>Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.</p>

            <button>Quero participar</button>
          </article>

          <article className={doacao.cardDoacao}>
            <img src={conecta} alt="Imagem de pessoas" />

            <h2>Instituto Conecta Jovem</h2>
            <p>Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades.</p>

            <button>Quero participar</button>
          </article>
        </section>
    </main>
  )
}

export default Doacao;

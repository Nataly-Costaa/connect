import home from "./home.module.scss";
import seta from "../../assets/icon/seta.png";
import banner from "../../assets/icon/banner.png";

const Home = () => {
  return (
    <main className={home.home}>
        <section className={home.section1}>
          <div className={home.info}>
            <h1>Projeto Sociais que transformam</h1>
            
            <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>

            <div className={home.button}>
              <button>
                Cadastrar Empresa
                <img src={seta} alt="Seta para direita" />
              </button>
            </div>
          </div>

          <div className={home.dados}>
            <div className={home.cardDados}>
              <p className={home.number}>500+</p>
              <p className={home.textDados}>Empresas Voluntárias</p>
            </div>

            <div className={home.cardDados}>
              <p className={home.number}>1.2K+</p>
              <p className={home.textDados}>Projetos Realizados</p>
            </div>

            <div className={home.cardDados}>
              <p className={home.number}>50K+</p>
              <p className={home.textDados}>Vidas Impactadas</p>
            </div>
          </div>
        </section>

        <section className={home.section2}>
          <img src={banner} alt="Banner com a imagem de uma mão" />
        </section>
    </main>
  )
}

export default Home;

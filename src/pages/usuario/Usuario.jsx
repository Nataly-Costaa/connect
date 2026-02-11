import usuario from "./usuario.module.scss";
import maps from "../../assets/icon/maps.png";
import email from "../../assets/icon/email.png";
import calendar from "../../assets/icon/calendar.png";

const Usuario = () => {
  return (
    <main className={usuario.usuario}>
        <section className={usuario.infoUser}>
            <div className={usuario.foto}>
              <img src="https://avatars.githubusercontent.com/u/109181119?v=4" alt="Imagem de usuário" />
            </div>

            <article className={usuario.dadosUsuario}>
              <div className={usuario.nameUser}>
                <h2>Nataly Costa</h2>
                <p>Voluntária Ativa</p>
              </div>  

              <p className={usuario.textUser}>
                Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.
              </p>

              <div className={usuario.contato}>
                <div className={`${usuario.card} ${usuario.cardMaps}`}>
                  <img src={maps} alt="Icone de localização" />
                  <p>Teresina, PI</p>
                </div>
                <div className={usuario.card}>
                  <img src={email} alt="Icone de e-mail" />
                  <p>natalycostaa21@gmail.com</p>
                </div>
                <div className={usuario.card}>
                  <img src={calendar} alt="Icone de calendario" />
                  <p>Membro desde Janeiro 2022</p>
                </div>
              </div>

              <div className={usuario.tags}>
                <div className={usuario.cardTag}>
                  <p>Educação</p>
                </div>
                <div className={usuario.cardTag}>
                  <p>Meio Ambiente</p>
                </div>
                <div className={usuario.cardTag}>
                  <p>Assistência Social</p>
                </div>
                <div className={usuario.cardTag}>
                  <p>Design</p>
                </div>
              </div>
            </article>
        </section>
    </main>
  )
}

export default Usuario;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyles.scss";

import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Doacao from "./pages/doacao/Doacao.jsx";
import Eventos from "./pages/eventos/Eventos.jsx";
import Mentoria from "./pages/mentoria/Mentoria.jsx";
import Usuario from "./pages/usuario/Usuario.jsx";
import Voluntariado from "./pages/voluntariado/Voluntariado.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import header from "./header.module.scss";
import logo from "../../assets/icon/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const userRef = useRef(null);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={header.header}>
      <div className={header.logo}>
        <Link to="/" className={header.logoLink}>
          <img
            src={logo}
            alt="Logo do site, uma mão segurando o coração"
          />
        </Link>
      </div>
      

      <nav className={header.nav}>
        <Link to="/doacao">Doação</Link>
        <Link to="/voluntariado">Voluntariado</Link>
        <Link to="/mentoria">Mentoria</Link>
        <Link to="/eventos">Eventos</Link>
      </nav>

      <div className={header.userActions} ref={userRef}>
        <img
          src="https://avatars.githubusercontent.com/u/109181119?v=4"
          alt="Imagem de perfil do usuário"
          onClick={toggleDropdown}
        />

        {open && (
          <div className={header.dropdown}>
            <Link to="/usuario">Nataly Costa</Link>
            <Link to="/voluntariado">Voluntariados</Link>
            <Link to="#">Configurações de Conta</Link>
            <Link to="/">Sair</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

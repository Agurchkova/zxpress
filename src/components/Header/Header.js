import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="navigation__menu-line">
          <Link to="/ezines" className="navigation__link">
            Пресса ▪{" "}
          </Link>
          <Link to="/books" className="navigation__link">
            Книги ▪{" "}
          </Link>
          <Link to="/zxnet" className="navigation__link">
            ZXNet
          </Link>
        </ul>
        <ul className="navigation__menu">
          <Link
            className="navigation__link"
            href="https://t.me/zxpress"
            target="_blank"
            rel="noreferrer"
          >
            Мы в телеграме
          </Link>
          <Link to="updates" className="navigation__link">
            Обновления
          </Link>
          <Link to="gallery" className="navigation__link">
            Галерея
          </Link>
          <Link to="chronology" className="navigation__link">
            Хронология
          </Link>
          <Link to="stats" className="navigation__link">
            Статистика
          </Link>
          <Link to="guestbook" className="navigation__link">
            Гостевая
          </Link>
          <Link to="whois" className="navigation__link">
            ?
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

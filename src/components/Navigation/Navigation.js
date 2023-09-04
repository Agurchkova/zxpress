import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu-line">
        <li>
          <Link to="/ezines" className="navigation__link link-hover">
            Пресса
          </Link>
          &nbsp;{"▪"}&nbsp;
        </li>
        <li>
          <Link to="/books" className="navigation__link link-hover">
            Книги
          </Link>
          &nbsp;{"▪"}&nbsp;
        </li>
        <li>
          <Link to="/zxnet" className="navigation__link link-hover">
            ZXNet
          </Link>
        </li>
      </ul>
      <ul className="navigation__menu">
        <Link
          className="navigation__link link-hover"
          href="https://t.me/zxpress"
          target="_blank"
          rel="noreferrer"
        >
          Мы в телеграме
        </Link>
        <Link to="updates" className="navigation__link link-hover">
          Обновления
        </Link>
        <Link to="gallery" className="navigation__link link-hover">
          Галерея
        </Link>
        <Link to="chronology" className="navigation__link link-hover">
          Хронология
        </Link>
        <Link to="stats" className="navigation__link link-hover">
          Статистика
        </Link>
        <Link to="guestbook" className="navigation__link link-hover">
          Гостевая
        </Link>
        <Link to="whois" className="navigation__link link-hover">
          ?
        </Link>
      </ul>
      <button className="navigation__burger-button" />
    </nav>
  );
}

export default Navigation;

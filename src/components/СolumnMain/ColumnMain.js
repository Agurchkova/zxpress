import "./ColumnMain.css";
import { Link } from "react-router-dom";
import Table from "../Table/Table";

function ColumnMain() {
  return (
    <div className="content__column-main">
      <h1 className="content__title">
        Электронные газеты и журналы для ZX Spectrum
      </h1>
      <ul className="content__letter-search-list">
        <Link className="content__letter-link">A</Link>
        <Link className="content__letter-link">B</Link>
        <Link className="content__letter-link">C</Link>
        <Link className="content__letter-link">D</Link>
        <Link className="content__letter-link">E</Link>
        <Link className="content__letter-link">F</Link>
        <Link className="content__letter-link">G</Link>
        <Link className="content__letter-link">H</Link>
        <Link className="content__letter-link">I</Link>
        <Link className="content__letter-link">J</Link>
        <Link className="content__letter-link">K</Link>
        <Link className="content__letter-link">L</Link>
        <Link className="content__letter-link">M</Link>
        <Link className="content__letter-link">N</Link>
        <Link className="content__letter-link">O</Link>
        <Link className="content__letter-link">P</Link>
        <Link className="content__letter-link">R</Link>
        <Link className="content__letter-link">S</Link>
        <Link className="content__letter-link">T</Link>
        <Link className="content__letter-link">U</Link>
        <Link className="content__letter-link">V</Link>
        <Link className="content__letter-link">W</Link>
        <Link className="content__letter-link">X</Link>
        <Link className="content__letter-link">Z</Link>
        <Link className="content__letter-link">�</Link>
      </ul>
      <Table />
      <ul className="content__letter-search-list">
        <Link className="content__letter-link">A</Link>
        <Link className="content__letter-link">B</Link>
        <Link className="content__letter-link">C</Link>
        <Link className="content__letter-link">D</Link>
        <Link className="content__letter-link">E</Link>
        <Link className="content__letter-link">F</Link>
        <Link className="content__letter-link">G</Link>
        <Link className="content__letter-link">H</Link>
        <Link className="content__letter-link">I</Link>
        <Link className="content__letter-link">J</Link>
        <Link className="content__letter-link">K</Link>
        <Link className="content__letter-link">L</Link>
        <Link className="content__letter-link">M</Link>
        <Link className="content__letter-link">N</Link>
        <Link className="content__letter-link">O</Link>
        <Link className="content__letter-link">P</Link>
        <Link className="content__letter-link">R</Link>
        <Link className="content__letter-link">S</Link>
        <Link className="content__letter-link">T</Link>
        <Link className="content__letter-link">U</Link>
        <Link className="content__letter-link">V</Link>
        <Link className="content__letter-link">W</Link>
        <Link className="content__letter-link">X</Link>
        <Link className="content__letter-link">Z</Link>
        <Link className="content__letter-link">�</Link>
      </ul>
    </div>
  );
}
export default ColumnMain;

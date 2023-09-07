import "./TableCatalog2.css";
import { Link } from "react-router-dom";
import russian_flag from "../../assets/images/russian_flag.png";
import belorussian_flag from "../../assets/images/belorussia_flag.png";

function TableCatalog2() {
  return (
    <>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">Acid Paper</Link>
          <span className="content__table-number">4</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <img
              className="content__table-flag"
              src={russian_flag}
              alt="Флаг России"
            />
          </div>
          Арзамас
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">2000</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">ACNews</Link>
          <span className="content__table-number">68</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <img
              className="content__table-flag"
              src={russian_flag}
              alt="Флаг России"
            />
          </div>
          Рязань
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">2001-2020</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">Adenturer</Link>
          <span className="content__table-number">5</span>
        </td>
        <td className="content__table-cell content__table-cell_wrap">
          <div className="content__table-border">
            <img
              className="content__table-flag"
              src={russian_flag}
              alt="Флаг России"
            />
          </div>
          Рыбинск
        </td>
        <td className="content__table-cell">журнал</td>
        <td className="content__table-cell">1995-2004</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">All Paper</Link>
          <span className="content__table-number">1</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <img
              className="content__table-flag"
              src={russian_flag}
              alt="Флаг России"
            />
          </div>
          Санкт-Петербург
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell"></td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">Always</Link>
          <span className="content__table-number">3</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <img
              className="content__table-flag"
              src={belorussian_flag}
              alt="Флаг Белоруссии"
            />
          </div>
          Минск
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1999-2000</td>
      </tbody>
    </>
  );
}

export default TableCatalog2;

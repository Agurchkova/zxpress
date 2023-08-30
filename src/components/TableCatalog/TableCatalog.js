import "./TableCatalog.css";
import { Link } from "react-router-dom";
import russian_flag from "../../images/russian_flag.png";
import ukranian_flag from "../../images/ukranian_flag.png";

function TableCatalog() {
  return (
    <>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link">
            #Z80
            <span className="content__table-number">6</span>
          </Link>
        </td>
        <td className="content__table-cell">
          <img
            className="content__table-flag"
            src={russian_flag}
            alt="Флаг России"
          />
          Пермь
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1998-2000</td>
      </tbody>

      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link">
            20
            <span className="content__table-number">5</span>
          </Link>
        </td>
        <td className="content__table-cell">
          <img
            className="content__table-flag"
            src={russian_flag}
            alt="Флаг России"
          />
          Москва
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1999-2001</td>
      </tbody>

      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link">
            200
            <span className="content__table-number">5</span>
          </Link>
        </td>
        <td className="content__table-cell content__table-cell_wrap">
          <img
            className="content__table-flag"
            src={russian_flag}
            alt="Флаг России"
          />
          Санкт-Петербург
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1994-1995</td>
      </tbody>

      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link">
            3Bit
            <span className="content__table-number">1</span>
          </Link>
        </td>
        <td className="content__table-cell">
          <img
            className="content__table-flag"
            src={ukranian_flag}
            alt="Флаг Украины"
          />
          Харьков
        </td>
        <td className="content__table-cell">журнал</td>
        <td className="content__table-cell">2005</td>
      </tbody>

      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link">
            47th Byte
            <span className="content__table-number">5</span>
          </Link>
        </td>
        <td className="content__table-cell">
          <img
            className="content__table-flag"
            src={russian_flag}
            alt="Флаг России"
          />
          Москва
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell"></td>
      </tbody>
    </>
  );
}

export default TableCatalog;

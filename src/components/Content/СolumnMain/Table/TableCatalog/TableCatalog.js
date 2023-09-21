import "../TableCatalogWithLetter/TableCatalogWithLetter";
import { Link } from "react-router-dom";
import Flag from "../../../../Common/Flag/Flag";

function TableCatalog() {
  return (
    <>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">#Z80</Link>
          <span className="content__table-number">6</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <Flag />
          </div>
          Пермь
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1998-2000</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">20</Link>
          <span className="content__table-number">5</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <Flag />
          </div>
          Москва
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1999-2001</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">200</Link>
          <span className="content__table-number">5</span>
        </td>
        <td className="content__table-cell content__table-cell_wrap">
          <div className="content__table-border">
            <Flag />
          </div>
          Санкт-Петербург
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell">1994-1995</td>
      </tbody>

      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">3Bit</Link>
          <span className="content__table-number">1</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <Flag className="UA_804 content__table-flag" />
          </div>
          Харьков
        </td>
        <td className="content__table-cell">журнал</td>
        <td className="content__table-cell">2005</td>
      </tbody>
      <tbody className="content__table-catalog">
        <td className="content__table-cell">
          <Link className="content__table-link link-hover">47th Byte</Link>
          <span className="content__table-number">1</span>
        </td>
        <td className="content__table-cell">
          <div className="content__table-border">
            <Flag />
          </div>
          Москва
        </td>
        <td className="content__table-cell">газета</td>
        <td className="content__table-cell"></td>
      </tbody>
    </>
  );
}

export default TableCatalog;

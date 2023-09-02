import "./Table.css";
import dashLong from "../../images/dash_long.png";
import TableCatalog from "../TableCatalog/TableCatalog";
import TableCatalog2 from "../TableCatalog2/TableCatalog2";
import { Link } from "react-router-dom";

function Table() {
  return (
    <>
      <table className="content__table">
        <thead className="content__table-header">
          <tr>
            <th className="content__table-name">Название</th>
            <th className="content__table-name">Город</th>
            <th className="content__table-name">Форма</th>
            <th className="content__table-name">Года издания</th>
          </tr>
        </thead>
        <TableCatalog />
        <div className="content__dash-long">
          <img className="content__dash-image-long" src={dashLong} alt="dash" />
        </div>
        <Link className="content__table-letter">A</Link>
        <TableCatalog2 />
      </table>
    </>
  );
}

export default Table;

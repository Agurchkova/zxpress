import "./Table.css";
import dashLong from "../../images/dash_long.png";
import TableCatalog from "../TableCatalog/TableCatalog";
import { Link } from "react-router-dom";

function Table() {
  return (
    <>
      <div className="content__table">
        <div className="content__table-header">
          <p className="contnent__table-name">Название</p>
          <p className="contnent__table-name">Город</p>
          <p className="contnent__table-name">Форма</p>
          <p className="contnent__table-name">Года издания</p>
        </div>
        <TableCatalog />
        <div className="content__dash-long">
          <img className="content__dash-image" src={dashLong} alt="dash" />
        </div>
      </div>
      <Link className="content__table-letter">A</Link>
      <TableCatalog />
    </>
  );
}

export default Table;

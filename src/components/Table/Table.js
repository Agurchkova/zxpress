import "./Table.css";
import dashLong from "../../assets/images/dash_long.png";
import TableCatalog from "../TableCatalog/TableCatalog";
import TableCatalog2 from "../TableCatalog2/TableCatalog2";
import { Link } from "react-router-dom";

function Table() {
  return (
    <>
      <div className="content__table">
        <div className="content__table-header">
          <div className="content__table-name">Название</div>
          <div className="content__table-name">Город</div>
          <div className="content__table-name">Форма</div>
          <div className="content__table-name">Года издания</div>
        </div>
        <TableCatalog />
        <div className="content__dash-long">
          <img className="content__dash-image-long" src={dashLong} alt="dash" />
        </div>
        <Link className="content__table-letter">A</Link>
        <TableCatalog2 />
      </div>
    </>
  );
}

export default Table;

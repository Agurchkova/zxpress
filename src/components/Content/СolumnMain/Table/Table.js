import "./Table.css";
import dashLong from "../../../../assets/images/dash_long.png";
import TableHeader from "../Table/TableHeader/TableHeader";
import TableCatalog from "./TableCatalog/TableCatalog";
import TableCatalogWithLetter from "./TableCatalogWithLetter/TableCatalogWithLetter";
import { Link } from "react-router-dom";

function Table() {
  return (
    <>
      <div className="content__table">
        <TableHeader />
        <TableCatalog />
        <div className="content__dash-long">
          <img className="content__dash-image-long" src={dashLong} alt="dash" />
        </div>
        <Link className="content__table-letter">A</Link>
        <TableCatalogWithLetter />
      </div>
    </>
  );
}

export default Table;

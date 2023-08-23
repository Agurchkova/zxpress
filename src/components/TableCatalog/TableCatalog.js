import "./TableCatalog.css";
import { Link } from "react-router-dom";
import russia_flag from "../../images/russia_flag.png";
import ukrain_flag from "../../images/ukrain_flag.png";

function TableCatalog() {
  return (
    <div className="content__table-catalog">
      <Link className="content__table-link">
        #Z80
        <span className="content__table-number">6</span>
      </Link>
      <div className="content__table-city">
        <img
          className="content__table-flag"
          src={russia_flag}
          alt="Флаг России"
        />
        Пермь
      </div>
      <div className="content__table-form">газета</div>
      <div className="content__table-years">1998-2000</div>
    </div>
  );
}

export default TableCatalog;

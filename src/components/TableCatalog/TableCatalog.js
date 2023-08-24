import "./TableCatalog.css";
import { Link } from "react-router-dom";
import russia_flag from "../../images/russia_flag.png";
import ukranian_flag from "../../images/ukranian_flag.png";

function TableCatalog() {
  return (
    <>
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
      <div className="content__table-catalog">
        <Link className="content__table-link">
          20
          <span className="content__table-number">5</span>
        </Link>
        <div className="content__table-city">
          <img
            className="content__table-flag"
            src={russia_flag}
            alt="Флаг России"
          />
          Москва
        </div>
        <div className="content__table-form">газета</div>
        <div className="content__table-years">1999-2001</div>
      </div>
      <div className="content__table-catalog">
        <Link className="content__table-link">
          200
          <span className="content__table-number">5</span>
        </Link>
        <div className="content__table-city">
          <img
            className="content__table-flag"
            src={russia_flag}
            alt="Флаг России"
          />
          Санкт-Петербург
        </div>
        <div className="content__table-form">газета</div>
        <div className="content__table-years">1994-1995</div>
      </div>
      <div className="content__table-catalog">
        <Link className="content__table-link">
          3Bit
          <span className="content__table-number">1</span>
        </Link>
        <div className="content__table-city">
          <img
            className="content__table-flag"
            src={ukranian_flag}
            alt="Флаг России"
          />
          Харьков
        </div>
        <div className="content__table-form">журнал</div>
        <div className="content__table-years">2005</div>
      </div>
      <div className="content__table-catalog">
        <Link className="content__table-link">
          47th Byte
          <span className="content__table-number">5</span>
        </Link>
        <div className="content__table-city">
          <img
            className="content__table-flag"
            src={russia_flag}
            alt="Флаг России"
          />
          Москва
        </div>
        <div className="content__table-form">газета</div>
        <div className="content__table-years"></div>
      </div>
    </>
  );
}

export default TableCatalog;

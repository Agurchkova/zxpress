import "./ColumnMain.css";
import Table from "../Table/Table";
import LetterSearchList from "../LetterSearchList/LetterSearchList";

function ColumnMain() {
  return (
    <div className="content__column-main">
      <h1 className="content__title">
        Электронные газеты и журналы для ZX Spectrum
      </h1>
      <LetterSearchList />
      <Table />
      <LetterSearchList />
    </div>
  );
}
export default ColumnMain;

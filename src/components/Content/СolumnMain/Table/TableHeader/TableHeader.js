import "./TableHeader.css";

function TableHeader() {
  return (
    <div className="content__table-header">
      <div className="content__table-name">Название</div>
      <div className="content__table-name">Город</div>
      <div className="content__table-name">Форма</div>
      <div className="content__table-name">Года издания</div>
    </div>
  );
}

export default TableHeader;

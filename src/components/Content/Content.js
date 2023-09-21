import "./Content.css";
import ColumnMain from "../Content/СolumnMain/ColumnMain";
import ColumnSearch from "../Content/ColumnSearch/ColumnSearch";

function Content() {
  return (
    <section className="content">
      <ColumnMain />
      <ColumnSearch />
    </section>
  );
}

export default Content;

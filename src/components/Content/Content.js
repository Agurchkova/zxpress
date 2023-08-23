import "./Content.css";
// import { Link } from "react-router-dom";
// import dash from "../../images/dash.png";
import ColumnMain from "../СolumnMain/ColumnMain";
import ColumnSearch from "../ColumnSearch/ColumnSearch";

function Content() {
  return (
    <section className="content">
      <ColumnMain />
      <ColumnSearch />
    </section>
  );
}

export default Content;

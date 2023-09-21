import "./Main.css";
import Header from "../Header/Header";
import Content from "../../Content/Content";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default Main;

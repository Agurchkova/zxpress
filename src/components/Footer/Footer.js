import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__copyright">
        <h1 className="footer__info">
          <span className="footer__info_bold">ZXPRESS</span> — Журналы, газеты и
          книги для ZX Spectrum © 2009-2023
        </h1>
        <div className="footer__terms">
          Использование материалов сайта разрешено только при указании обратной
          ссылки
        </div>
      </div>
    </section>
  );
}
export default Footer;

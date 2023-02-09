export default function Navbar(props) {
  const navBackground = {
    backgroundColor: props.isTrue ? "#ffffff01" : "#000024ce",
    borderBottom: props.isTrue ? "1px solid #000" : "1px solid #fff",
  };

  const logoColor = {
    color: props.isTrue ? "#000024ce" : "#ffffff99",
  };

  return (
    <nav className="navbar" style={navBackground}>
      <a style={logoColor} href="/" className="navbar__logo">
        <img src="/logo.png" alt="Logo" className="navbar__logo--img" />
        Synonyms
      </a>
      <div className="navbar__button">
        <img
          data-night={props.isTrue}
          src="https://img.icons8.com/ios-filled/50/null/sun--v1.png"
          className="toggle__icons navbar__button--light"
        />
        <div onClick={props.click} className="navbar__button--toggle">
          <span
            data-night={props.isTrue}
            className="navbar__button--toggle-sphere"
          ></span>
        </div>
        <img
          data-night={!props.isTrue}
          src="https://img.icons8.com/ios-glyphs/30/null/moon-symbol.png"
          className="toggle__icons navbar__button--night"
        />
      </div>
    </nav>
  );
}

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          <img src="./images/logo_1.png" alt="logo" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

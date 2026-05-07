function Header({ darkMode, setDarkMode }) {
  return (
    <header>
      <h1>Task Tracker</h1>

      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
    </header>
  );
}

export default Header;
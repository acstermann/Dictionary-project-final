import "./App.css";
import logo from "./images/dictionary.jpg";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyWord="sunset" />
        </main>
        <footer className="App-footer">
          <a href="https://github.com/acstermann/Dictionary-project-final">
            Coded{" "}
          </a>
          by A.Stermann
        </footer>
      </div>
    </div>
  );
}

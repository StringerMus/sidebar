import css from "./App.module.css";
import NavBarSimple from "./components/NavBarSimple";
import Sidebar from "./components/Sidebar";
import NavBarForm from "./components/NavBarForm";
import ContentHooks from "./components/ContentHooks";

function App() {
  return (
    <div className={css.App}>
      <NavBarSimple />
      <Sidebar />
      <NavBarForm />
      <ContentHooks />
    </div>
  );
}

export default App;
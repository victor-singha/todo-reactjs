import "./App.css";
import NavBar from "./Components/NavBar";
import Todos from "./Components/Todos";

document.body.style.overflow = "auto";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Todos />
    </div>
  );
}

export default App;

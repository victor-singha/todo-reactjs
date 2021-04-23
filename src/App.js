import "./App.css";
import Todos from "./Components/Todos";

document.body.style.overflow = "auto";
function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;

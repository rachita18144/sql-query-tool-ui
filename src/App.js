import "./App.css";
import { DatabaseMain } from "./Components/DatabaseComponent/DatabaseMain";
import { QueryInterfaceComponent } from "./Components/QueryInterfaceComponent/QueryInterfaceComponent";

function App() {
  return (
    <div className="App">
      <div className="header">SQL Database Query Tool</div>
      <div className="container">
        <DatabaseMain />
        <QueryInterfaceComponent />
      </div>
    </div>
  );
}

export default App;

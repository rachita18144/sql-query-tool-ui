import "./App.css";
import { DatabaseMain } from "./Components/DatabaseComponent/DatabaseMain";
import { QueryInterfaceComponent } from "./Components/QueryInterfaceComponent/QueryInterfaceComponent";
import { MyContextProvider } from "./MyContext";

function App() {
  return (
    <MyContextProvider>
      <div className="App">
        <div className="header">SQL Database Query Tool</div>
        <div className="container">
          <DatabaseMain />
          <QueryInterfaceComponent />
        </div>
      </div>
    </MyContextProvider>
  );
}

export default App;

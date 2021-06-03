import "App.css";
import { MenuComponent } from "Components/MenuComponent";
import { SwitchComponent } from "Components/SwitchComponent";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="NavBar">
          <MenuComponent />
        </div>
        <div className="Content">
          <SwitchComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;

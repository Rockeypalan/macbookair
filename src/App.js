import "./App.css";
import SideNav from "./component/SideNav";
import Air from "./component/Air";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-1">
            <SideNav />
          </div>
          <div className="col-sm-11">
            {" "}
            <Air />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

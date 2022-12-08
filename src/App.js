import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Characters from "./features/characters";

const App = () => {
  return (
    <Router>
      {/* <Menu/> */}
      <Switch>
        <Route exact path="/" component={Characters} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

export default App;

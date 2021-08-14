import * as React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./component/Home/home";
import Scroll from "./rot";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scroll>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Scroll>
      </Router>
    );
  }
}

export default App;

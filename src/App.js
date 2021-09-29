import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./component/Home/home";
import ContactPage from "./component/Contact/contactPage";
import AboutPage from "./component/About/about";
import Scroll from "./rot";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Scroll>
          <Switch>
            <Route path="/pranava_yogo" component={Home} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route exact path="/" render={() => <Redirect to="/pranava_yogo" />} />
          </Switch>
        </Scroll>
      </Router>
    );
  }
}

export default App;

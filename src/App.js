import * as React from "react";
import "./styles.css";
import {
  ChakraProvider,
} from "@chakra-ui/react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import NavBar from "./components/NavBar";

import WollectView from "./pages/web3/WollectView";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Person from "./pages/Person";


export default function App() {
  return (
    <Router>
        <NavBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/person">
            <Person />
          </Route>
          <Route path="/wollect">
            <WollectView />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
  );
}

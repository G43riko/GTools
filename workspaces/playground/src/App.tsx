import { lazy } from 'solid-js'
import './App.css'
import { Router, Route, A } from "@solidjs/router";
import Welcome from "./Welcome.tsx";
import { demoNameToLink } from "./misc-utils.ts";
import { DemoList } from "./demo-list.ts";

const LazyWelcome = lazy(() => import("./Welcome.tsx"));


const App = () => (
  <Router>
    {
      DemoList.map(([name, Component]) => <Route path={demoNameToLink(name)} component={Component} />)
    }
    <Route path="/" component={LazyWelcome} />
  </Router>
);

export default App;
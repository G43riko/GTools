import { lazy } from "solid-js";
import { A, Route, Router } from "@solidjs/router";
import { demoNameToLink } from "./misc-utils.ts";
import { DemoList } from "./demo-list.ts";

const LazyWelcome = lazy(() => import("./Welcome.tsx"));

const App = () => (
    <Router>
        {DemoList.map(([name, Component]) => <Route path={demoNameToLink(name)} component={Component} />)}
        <Route path="/" component={LazyWelcome} />
    </Router>
);

export default App;

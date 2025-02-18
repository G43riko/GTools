import './App.css'
import { A } from "@solidjs/router";
import { DemoList } from "./demo-list.ts";
import { demoNameToLink } from "./misc-utils.ts";

const Welcome = () => {
  const availableDemosLinks = DemoList.map(([name]) => {
    return <A href={`/${demoNameToLink(name)}`}>{name}</A>;
  })
  return <>
    <h1>Welcome to GTools playground</h1>
    {availableDemosLinks}
  </>
}


export default Welcome;
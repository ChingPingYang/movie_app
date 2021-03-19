import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./page/landing/LandingContainer";
import Detail from "./page/detail/DetailContainer";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/:id" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

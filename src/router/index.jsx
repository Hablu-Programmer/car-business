import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/home";

const Router = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Home />
      </Route>
    </Switch>
  );
};

export default Router;

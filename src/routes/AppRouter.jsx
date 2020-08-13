import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "./Home";

function AppRouter() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;

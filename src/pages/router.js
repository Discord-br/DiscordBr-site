import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import { page_landing, documentation, NotFound} from './index';

  
  function router() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={page_landing} />
                <Route path="/documentacao" component={documentation} />
                <Route component={NotFound} />
            </Switch>
      </Router>
      
    );
  };

  export default router
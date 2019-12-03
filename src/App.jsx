import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PageEmployeesList from './PageEmployeesList';
import PageEmployee from './PageEmployee';

const App=()=>(
    <Router>
        <Switch>
            <Route  exact path="/">
            <PageEmployeesList/>
            </Route>
            <Route exact path="/new">
            <PageEmployee/>
            </Route>
        </Switch>
    </Router>
)
export default App
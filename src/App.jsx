import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PageEmployeesList from './PageEmployeesList';
import Form from './Form';

const App=()=>(
    <Router>
        <Switch>
            <Route  exact path="/">
            <PageEmployeesList/>
            </Route>
            <Route exact path="/new">
            <Form/>
            </Route>
        </Switch>
    </Router>
)
export default App
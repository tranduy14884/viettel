import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AdHomePage from './Features/AdHomePage';

function Admin(props) {
    const match = useRouteMatch();
    // console.log(match);
    return (
        <div>
            <Switch>
                <Route path={match.path} component={AdHomePage} exact></Route>
                {/* <Route path={`Admin/giadinh`} component={AdFooter} exact ></Route> */}

            </Switch>
        </div>
    );
}

export default Admin;
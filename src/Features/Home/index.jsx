import React from 'react';
import PropTypes from 'prop-types';
import "./style.css";
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MainPage from './Pages/Main';
Home.propTypes = {

};

function Home(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.url} component={MainPage}></Route>
        </Switch>
    );
}

export default Home;
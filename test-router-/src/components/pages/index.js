import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import Users from './users';
import Topics from './topics';
import NotFound from './not-found';

const Page = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/users">
                    <Users />
                </Route>
                <Route  path="/topics">
                    <Topics />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    );
}

export default Page;

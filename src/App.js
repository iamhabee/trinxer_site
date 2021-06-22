import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history'
import Home from './pages/Home';
import News from './pages/News';
import NewsSinglePost from './pages/NewsSinglePost';
import SearchResults from './pages/SearchResults';
import page404 from './pages/404';
import UserInterface from './pages/UserInterface';
import { UserProvider } from './context';

export const history = createBrowserHistory()

function App() {
    return (
        <UserProvider>
        <Router history={history}>
            <Switch>
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/" }` }
                    component={ Home }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news" }` }
                    component={ News }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/news-single-post/:id" }` }
                    component={ NewsSinglePost }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/search-results" }` }
                    component={ SearchResults }
                />
                <Route
                    exact
                    path={ `${ process.env.PUBLIC_URL + "/ui" }` }
                    component={ UserInterface }
                />
                <Route exact component={ page404 } />
            </Switch>
        </Router>
        </UserProvider>
    );
}

export default App;

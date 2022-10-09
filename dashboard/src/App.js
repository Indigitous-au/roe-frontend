import React, {lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AccessibleNavigationAnnouncer from './components/AccessibleNavigationAnnouncer'
import {Auth0Provider} from "@auth0/auth0-react";

const Auth0Domain = process.env.AUTH0_DOMAIN;
const Auth0ClientId = process.env.AUTH0_CLIENT_ID;
const JWTAudience = process.env.JWT_AUDIENCE
const AppScope = "openid email profile offline_access" // process.env.APP_SCOPE
const Layout = lazy(() => import('./containers/Layout'))

function App() {
    return (
        <Auth0Provider
            domain={Auth0Domain}
            clientId={Auth0ClientId}
            audience={JWTAudience}
            scope={AppScope}
            redirectUri={window.location.origin}
        >
            <Router>
                <AccessibleNavigationAnnouncer/>
                <Switch>
                    <Route path="/dashboard" component={Layout}/>
                    <Route path="/" component={Layout}/>
                </Switch>
            </Router>
        </Auth0Provider>
    )
}

export default App

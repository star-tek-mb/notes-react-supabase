import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { AuthRoute, AuthProvider } from './contexts/Auth'

import CreateNote from './pages/CreateNote'
import EditNote from './pages/EditNote'
import Home from './pages/Home'
import Login from './pages/Login'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        background-color: #222;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
    }
    ol, ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`

export default function App() {
    return (
        <Router>
            <GlobalStyle />
            <AuthProvider>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <AuthRoute path="/" exact>
                        <Home />
                    </AuthRoute>
                    <AuthRoute path="/create" exact>
                        <CreateNote />
                    </AuthRoute>
                    <AuthRoute path="/:slug" exact>
                        <EditNote />
                    </AuthRoute>
                </Switch>
            </AuthProvider>
        </Router>
    )
}
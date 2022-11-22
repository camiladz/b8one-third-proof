import './App.css'
import { ApolloProvider } from "@apollo/client";
import client from './graphql/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignInPage } from './pages/login'
import DashboardPage from './pages/dashboard';


function App() {

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SignInPage />
          </Route>
          <Route exact path="/dashboard">
            <DashboardPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App


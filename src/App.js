import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { AuthContext } from './contexts/authContext';
import { useContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-domain';
import routes from './config/route';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const { user, setUser } = useContext(AuthContext);
  console.log(user);
  const role = user ? user.role : 'guest';
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {routes[role].route.map(item => (
            <Route
              key={item.path}
              exact
              path={item.path}
              component={item.component}
            />
          ))}
          <Redirect to={routes[role].redirect} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

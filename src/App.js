import React, { Component, Suspense } from 'react';
import './convertion/App.css';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./container/home/home'));
const Teacher = React.lazy(() => import('./container/teachers/teachers'));
const SignIn = React.lazy(() => import('./container/signIn/signIn'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>          
          <Route path="/sign-in" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <SignIn {...props}/> </Suspense>)}/>          
          <Route path="/teachers" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Teacher {...props}/> </Suspense>)}/>          
          <Route path="/" render={ (props) => (<Suspense fallback={<p>Loading...</p>}> <Home {...props}/> </Suspense>)}/>          
        </Switch>
      </div>
    );
  }
}

export default App;

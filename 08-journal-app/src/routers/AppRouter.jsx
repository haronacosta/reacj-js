import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthRouter from './AuthRouter';
import JournalScreen from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import PrivateRoute from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { startLoadingNotes } from '../actions/notes';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));

        dispatch(startLoadingNotes(user.uid));

        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    });
  }, [setChecking, dispatch, setIsLoggedIn]);

  if (checking) {
    return <h1>Waiting...</h1>;
  }

  return (
    <div>
      <Router>
        <div>
          <Switch>
            <PublicRoute path={'/auth'} isAuthenticated={isLoggedIn} component={AuthRouter} />

            <PrivateRoute
              path={'/*'}
              exact
              isAuthenticated={isLoggedIn}
              component={JournalScreen}
            />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;

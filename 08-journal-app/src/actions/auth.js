import Swal from 'sweetalert2/dist/sweetalert2.js';

import 'sweetalert2/src/sweetalert2.scss';

import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';
import { deleteNotes } from './notes';
import { uiFinishLoading, uiStartLoading } from './ui';

export const startLoginWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());
      })
      .catch((err) => {
        dispatch(uiFinishLoading());
        Swal.fire({
          title: 'Error',
          text: err.message,
          icon: 'error'
        });
      });
  };
};

export const startLoginWithGoogle = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: err.message,
          icon: 'error'
        });
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: { uid, displayName }
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());

    dispatch(deleteNotes());
  };
};

export const logout = () => ({
  type: types.logout
});

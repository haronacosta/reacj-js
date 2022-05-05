import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { removeUIError, setUIError } from '../../actions/ui';

import { useForm } from '../../hooks/useForm';
const RegisterScreen = () => {
  const dispatch = useDispatch();

  const { msgError } = useSelector((state) => state.ui);

  const [values, handleInputChange] = useForm({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const { userName, email, password, confirmPassword } = values;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, userName));
    }
  };

  const isFormValid = () => {
    if (userName.trim().length === 0) {
      dispatch(setUIError('User name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setUIError('Email is invalid'));
      return false;
    } else if (password !== confirmPassword || password.length < 6) {
      dispatch(setUIError('Password is invalid'));
      return false;
    }

    dispatch(removeUIError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>

      <form action="post" onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          type="text"
          placeholder="Your name"
          name="userName"
          autoComplete="off"
          value={userName}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Your email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          name="password"
          placeholder="Your password"
          value={password}
          onChange={handleInputChange}
        />

        <input
          className="auth__input"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleInputChange}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Create Account
        </button>

        <Link className="link mb-5 mt-5" to="/auth/register">
          Already have an account?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;

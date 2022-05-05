import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginWithEmailAndPassword, startLoginWithGoogle } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(startLoginWithGoogle());
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form action="post" onSubmit={handleLogin}>
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
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" disabled={isLoading} type="submit">
          Login
        </button>
        <hr />

        <div className="auth__social-networks">
          <p>Login with social network</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google button"
              />
            </div>
            <p className="btn-text">
              <b className="btn">Sign in with google</b>
            </p>
          </div>
        </div>

        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};

export default LoginScreen;

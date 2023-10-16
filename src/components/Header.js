import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((x) => x.auth.isAuthenticated);

  const content = (
    <ul>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button
          onClick={() => {
            dispatch(authActions.logout());
          }}
        >
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <>
      <header className={classes.header}>
        <h1>Redux Auth</h1>
        <nav>{isAuth && content}</nav>
      </header>
    </>
  );
};

export default Header;

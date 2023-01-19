import "../css/navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/slices/AuthSlice";
import { toast } from "react-toastify";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartTotalQuantity }: any = useSelector((state: any) => state.cart);
  const auth: any = useSelector((state: any) => state.auth);
  const { categories }: any = useSelector((state: any) => state.products);

  return (
    <div className="nav-bar">
      <nav className="navbar navbar-expand-lg  py-3 px-2">
        <div className="container-fluid">
          <a className="navbar-logo" href="/">
            Henry's Merch
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              key="category-container"
            >
              <li className="nav-item dropdown" key="category-title">
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorías
                </a>
                <ul
                  className="dropdown-menu border border-dark bg-black"
                  key="category-list"
                >
                  <div className="categories">
                    {categories?.map((category: any, index: any) => {
                      return (
                        <li key={index}>
                          <Link
                            to={`/category/${category.category}`}
                            className="dropdown-item "
                          >
                            {category.category}
                          </Link>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </li>

              <li className="nav-item" key="my-account">
                {/* <NavLink
                  to={`/user/${auth._id}:`}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link text-black fw-bold active"
                      : "nav-link text-black"
                  }
                >
                  Mi Cuenta
                </NavLink> */}
                <div
                  className="btn border-none bg-none text-black"
                  onClick={() => navigate(`/user/${auth._id}`)}
                >
                  Mi Perfil
                </div>
              </li>
              <Link to="/cart">
                <div className="nav-cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="black"
                    className="bi bi-cart2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                  <span className="items-cart">
                    <span className="item">{cartTotalQuantity}</span>
                  </span>
                </div>
              </Link>
            </ul>
            <div className="mx-3">
              {auth._id ? (
                <div>
                  <div className="d-flex text-black">
                    {auth.isAdmin ? (
                      <div className="btn border-none bg-none">
                        <Link to="/admin/summary" className="text-black">
                          Admin
                        </Link>
                      </div>
                    ) : null}
                    <div
                      className="btn border-none bg-none text-black"
                      onClick={() => {
                        dispatch(logoutUser(null));
                        toast.warning("Logged out", { position: "top-right" });
                      }}
                    >
                      Logout
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <ul
                    className="navbar-nav me-auto mb-2 mb-lg-0"
                    key="login-list"
                  >
                    <li className="nav-item" key="login">
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link text-black fw-bold active"
                            : "nav-link text-black"
                        }
                      >
                        Login
                      </NavLink>
                    </li>
                    <li className="nav-item" key="register">
                      <NavLink
                        to="/register"
                        className={({ isActive }) =>
                          isActive
                            ? "nav-link text-black fw-bold active"
                            : "nav-link text-black"
                        }
                      >
                        Registrarse
                      </NavLink>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="me-5">
              <SearchBar />
            </div>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form> */}
            {/* <button className="mx-3 btn btn-secondary text-white">Enter</button> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };

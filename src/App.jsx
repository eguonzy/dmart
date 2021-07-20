import { Switch, Route, useLocation, useHistory } from "react-router-dom";
import HomePage from "./components/home_components/home_page";
import Mart from "./components/mart_components/mart_landing";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import { Provider, useSelector } from "react-redux";
import configureStore from "./model/store/configureStore";
import CheckOut from "./components/checkout components/Checkout";
import UserOptions from "./components/account components/UserOptions";
import MerchantParent from "./components/merchants/MerchantParent";
import AlertBox from "./components/reusables/AlertBox";
import AdminLanding from "./components/admin/AdminLanding";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProtectedRoute from "./components/ProtectedRoute";

const store = configureStore();
const routes = [
  { path: "/admin", component: AdminLanding, isPrivate: true },
  { path: "/account", component: UserOptions, isPrivate: true },
  { path: "/auth", component: HomePage },
  { path: "/checkout", component: CheckOut, isPrivate: true },
  { path: "/merchant", component: MerchantParent, isPrivate: true },
  { path: "/", component: Mart },
];
function App() {
  let location = useLocation();
  let history = useHistory();

  return (
    <Provider store={store}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={100}>
          <div className="App">
            <AlertBox />
            <Switch location={location}>
              {routes.map(({ path, component: Component, isPrivate }) => {
                return isPrivate ? (
                  <ProtectedRoute history={history} key={path} path={path}>
                    {Component}
                  </ProtectedRoute>
                ) : (
                  <Route
                    key={path}
                    path={path}
                    render={(props) => <Component {...props} />}
                  />
                );
              })}
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Provider>
  );
}
export default App;

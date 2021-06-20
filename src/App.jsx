import { Switch, Route, useLocation } from "react-router-dom";
import HomePage from "./components/home_components/home_page";
import Mart from "./components/mart_components/mart_landing";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import { Provider } from "react-redux";
import configureStore from "./model/store/configureStore";
import CheckOut from "./components/checkout components/Checkout";
import UserOptions from "./components/account components/UserOptions";
import MerchantParent from "./components/merchants/MerchantParent";
import AlertBox from "./components/reusables/AlertBox";
import AdminLanding from "./components/admin/AdminLanding";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const store = configureStore();
const routes = [
  { path: "/admin", component: AdminLanding },
  { path: "/account", component: UserOptions },
  { path: "/auth", component: HomePage },
  { path: "/checkout", component: CheckOut },
  { path: "/merchant", component: MerchantParent },
  { path: "/", component: Mart },
];
function App() {
  let location = useLocation();
  return (
    <Provider store={store}>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={100}>
          <div className="App">
            <AlertBox />

            <Switch location={location}>
              {routes.map(({ path, component }) => (
                <Route key={path} path={path} component={component} />
              ))}
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Provider>
  );
}
export default App;

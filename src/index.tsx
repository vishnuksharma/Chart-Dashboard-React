import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from "./components/Layout";
import { addLocaleData } from "react-intl";
import * as locale_en from "react-intl/locale-data/en";
import * as locale_de from "react-intl/locale-data/de";
import { CircularProgress } from "@material-ui/core";
import configureStore from "./Utils/ConfigureStore";

const Workspace = React.lazy(() => import("./containers/Workspace"));
const WorspaceWithFallback = () => (
  <React.Suspense fallback={<CircularProgress />}>
    <Workspace />
  </React.Suspense>
);

addLocaleData([...locale_en, ...locale_de]);

const store = configureStore({chartTypes:[], selectedChartTypes:[], isLoading:false });

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
          <Route path="/" component={WorspaceWithFallback} />
        </Router>
      </Layout>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

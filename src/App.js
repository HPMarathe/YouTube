import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
// import SearchResults from "./components/SearchResults";
import { Suspense, lazy } from "react";
const WatchPage = lazy(() => import("./components/WatchPage"));
const SearchResults = lazy(() => import("./components/SearchResults"));

// error - useNavigate() may be used only in the context of a <Router> component.
// for handling this error we need to put heaader into our approuter & hence we created Layout

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: (
          <Suspense>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense>
            <SearchResults />,
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

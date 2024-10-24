import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Login from "./components/userAcees/Login";
import Registration from "./components/userAcees/Registration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

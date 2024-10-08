import Dashboard from "../presentation/Dashboard";
import Login from "../presentation/Login";

export const routes = [
  {
    path: "/",
    subRoutes: [
      {
        index: true,
        element: <Login />,
        isProtected: false,
      },
      {
        path: "login",
        element: <Login />,
        isProtected: false,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        isProtected: true,
      },
    ],
  },
];

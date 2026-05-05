import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CreateGroup from "../pages/CreateGroup";
import AllGroups from "../pages/AllGroups";
import GroupDetails from "../pages/GroupDetails";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "../provider/PrivateRoute";
import MyGroups from "../pages/MyGroups";
import UpdateGroup from "../pages/UpdateGroup";
import ComingSoon from "../pages/ComingSoon";
import MyJoinedGroups from "../pages/MyJoinedGroups";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        // ✅ Fixed: Removed double slashes
        loader: () => fetch("https://passion-loop-server.vercel.app/groups"),
        Component: Home,
      },
      {
        path: "allGroups",
        // ✅ Fixed: Removed double slashes
        loader: () => fetch("https://passion-loop-server.vercel.app/groups"),
        Component: AllGroups,
      },
      {
        path: "createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "group/:id",
        // ✅ Fixed: Removed double slashes
        loader: ({ params }) =>
          fetch(`https://passion-loop-server.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoute>
            <GroupDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "myGroups",
        element: (
          <PrivateRoute>
            <MyGroups />
          </PrivateRoute>
        ),
      },
      {
        path: "updateGroup/:id",
        // ✅ Fixed: Removed double slashes
        loader: ({ params }) =>
          fetch(`https://passion-loop-server.vercel.app/groups/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateGroup />
          </PrivateRoute>
        ),
      },

      {
        path: "myJoinedGroups",
        element: (
          <PrivateRoute>
            <MyJoinedGroups />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/comingSoon",
    Component: ComingSoon,
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      // ✅ Tip: Use relative paths for children
      { path: "signup", Component: SignUp },
      { path: "signin", Component: SignIn },
    ],
  },
]);

export default router;

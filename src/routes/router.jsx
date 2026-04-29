// import { createBrowserRouter } from "react-router";
// import MainLayout from "../layouts/MainLayout";
// import Home from "../pages/Home";
// import CreateGroup from "../pages/CreateGroup";
// import AllGroups from "../pages/AllGroups";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     Component: MainLayout,
//     children: [
//       { index: true, Component: Home },
//       {
//         path: "createGroup",
//         Component: CreateGroup,
//       },
//       {
//         path: "allGroups",
//         loader: () => fetch("http://localhost:3000/groups"),
//         Component: AllGroups,
//       },
//     ],
//   },
// ]);

// export default router;
import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import CreateGroup from "../pages/CreateGroup";
import AllGroups from "../pages/AllGroups";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/groups"),
        Component: Home,
      },
      {
        path: "createGroup",
        Component: CreateGroup,
      },
      {
        path: "allGroups",
        loader: () => fetch("http://localhost:3000/groups"),
        Component: AllGroups,
      },
    ],
  },
]);

export default router;
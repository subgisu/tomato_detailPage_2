import { createBrowserRouter } from "react-router";
import { TomatoDetail } from "./pages/TomatoDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: TomatoDetail,
  },
]);

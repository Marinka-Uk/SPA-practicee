import { router } from "routing";
import { RouterProvider } from "react-router-dom";

export const App = () => {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  );
};

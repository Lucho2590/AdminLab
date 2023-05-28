import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CustomersListPage from "../pages/Customers";
import WorkOrdersPage from "../pages/WorkOrders";
import HomePage from "../pages/Home";
import InstrumentPage from "../pages/Instruments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/customers",
    element: <CustomersListPage />,
  },
  {
    path: "/work-orders",
    element: <WorkOrdersPage />,
  },
  {
    path: "/instrument",
    element: <InstrumentPage />,
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}

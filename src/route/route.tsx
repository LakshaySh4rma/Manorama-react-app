import { createBrowserRouter } from "react-router-dom";
import Home from "../commonents/page/index/home";
import Layout from "../commonents/layout/Layout";
import Receipt from "../commonents/page/index/receipt";
import PrivacyPolicy from "../commonents/page/Policy/PrivacyPolicy";
import Terms from "../commonents/page/Policy/Terms";
import Disclaimer from "../commonents/page/Policy/Disclaimer";
import RefundPolicy from "../commonents/page/Policy/RefundPolicy";
import Contact from "../commonents/page/Policy/Contact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "receipt",
        element: <Receipt />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/terms",
        element: <Terms />,
      },

      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },

      {
        path: "/refund-policy",
        element: <RefundPolicy />,
      },

      {
        path: "/index",
        element: <Home />,
      },
    ],
  },
]);

import App from "../App"
import Dashboard from "../pages/Dashboard"
import Layout from "../pages/Layout"
import NotFound from "../pages/NotFound"
import Transaction from "../pages/Transaction"

const routes = [
    { path: "/", element: <App /> },
    { path: "*", element: <NotFound /> },
    {
        element: <Layout />,
        children: [
            {path:"/dashboard",element:<Dashboard/>},
            {path:"/transaction",element:<Transaction/>}

        ]
    }
]





export default routes

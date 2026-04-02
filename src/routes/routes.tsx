import App from "../App"
import Layout from "../pages/Layout"
import NotFound from "../pages/NotFound"

const routes = [
    { path: "/", element: <App /> },
    { path: "*", element: <NotFound /> },
    {
        element: <Layout />,
        children: [
            {

            }
        ]
    }
]





export default routes

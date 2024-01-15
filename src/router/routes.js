import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Category/Category";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Categories/:name',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
            }
        ]
    }
])

export default routes;
import { createBrowserRouter } from "react-router-dom";
import Main from "setup/layouts/Main";
import Home from "pages-and-components/pages/home/home/Home";
import Category from "pages-and-components/pages/category/Category";
import Categories from "pages-and-components/pages/categories/Categories";

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
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/Categories/:name',
                element: <Category></Category>
            }
        ]
    }
])

export default routes;
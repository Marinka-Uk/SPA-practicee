
import {createBrowserRouter} from "react-router-dom"
import {Layout} from "./Pages/layout"
import {MainPage} from "./Pages/MainPage"
import {SearchPage} from "./Pages/SearchPage"





export const router = createBrowserRouter([
    {
        path: "/",
       element: <Layout/>,
       children:[
        {
           index: true,
            element: <MainPage/>,
        },
        {
             path: "/search",
            element: <SearchPage/>
        }
       ]
    }
])

import {createBrowserRouter} from "react-router-dom"
import {Layout} from "./Pages/layout"
import {MainPage} from "./Pages/MainPage"
import {SearchPage} from "./Pages/SearchPage"
import { GallaryPage } from "./Pages/Gallery"



// додати маршут Gallerypage тут
//використати в цьому маршуті loadingг функція запит (useLoaderData)
//зарендерити на сторінці в галереї список котів 

const galleryLoader = async ()=>{
    const res = await fetch("")
    return res.json()
}

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
        },{
             path: "/gallery",
            element: <GallaryPage/>,
               loader: galleryLoader,
        }     ]
    }
])
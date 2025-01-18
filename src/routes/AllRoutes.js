import {  Route ,createBrowserRouter ,createRoutesFromElements} from "react-router-dom";
import { paths } from './Path'
import Home from "../Layout/Home";

const routes=createRoutesFromElements(
    <>
    <Route path={paths.home} element={<Home/>}/>
    <Route path={paths.home} element />

    
    </>
)
export const allRoutes = createBrowserRouter(routes);

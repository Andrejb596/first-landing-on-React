import { Routes as Switch, Route } from "react-router-dom";
import { Home, AboutUs, FindSpace, ShareSpace, PromoteSpace, PageNotFound } from "../pages";
import { routs } from "./utils/objOfRouts";

export const Routes = () => {
    return (
        <Switch>
            <Route path={routs.Home} element={<Home />} />
            <Route path={routs.AboutUs} element={<AboutUs />} />
            <Route path={routs.FindSpacemen} element={<FindSpace />} />
            <Route path={routs.ShareSpace} element={<ShareSpace />} />
            <Route path={routs.PromoteSpace} element={<PromoteSpace />} />
            <Route path="*" element={<PageNotFound />} />
        </Switch>
    )
}

import React from 'react'
import {
    Route
} from "react-router-dom";
const RouteWithSubRoutes = ({ path, route, component }) => {
    return (
        <Route path={path} render={(props) => (<component {...props} routes={route} />)} />

    )
}

export default RouteWithSubRoutes
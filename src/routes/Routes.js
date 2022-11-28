import React from 'react'
import { Link, Routes } from 'react-router-dom'
import routes from './groupRoutes'
import RouteWithSubRoutes from './RouteWithSubRoutes'

const RouteConfig = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/home'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>About</Link>
                </li>
            </ul>
            <Routes>
                {
                    routes.map((e, index) => (
                        <RouteWithSubRoutes  key={index} {...e}/>
                    ))
                }
            </Routes>
        </div>
    )
}

export default RouteConfig
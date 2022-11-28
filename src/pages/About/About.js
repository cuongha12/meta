import React from 'react'
import { Link, Routes } from 'react-router-dom'
import routes from '../../routes/groupRoutes'
import RouteWithSubRoutes from '../../routes/RouteWithSubRoutes'

const About = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/about/bus'}>bus</Link>
                </li>
                <li>
                    <Link to={'/about/cart'}>cart</Link>
                </li>
            </ul>
            <Routes>
                {
                    routes.map((e, i) => (
                        <RouteWithSubRoutes key={i} {...e} />
                    ))
                }
            </Routes>
        </div>
    )
}

export default About
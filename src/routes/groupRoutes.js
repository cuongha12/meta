import About from "../pages/About/About";
import Bus from "../pages/Bus/Bus";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/about",
        component: About,
        routes: [
            {
                path: "/about/bus",
                component: Bus
            },
            {
                path: "/about/bus",
                component: Cart
            }
        ]
    }
];
export default routes
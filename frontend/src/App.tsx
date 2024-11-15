import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
// import "./css/app.css"
import "./scss/app.scss"
// import pizzas from './components/pizza.json'


function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} /> {/* Маршрут для 404 */}
                </Routes>
            </div>
        </div>
    )
}

export default App

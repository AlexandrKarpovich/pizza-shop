import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
// import "./css/app.css"
import "./scss/app.scss"
import {useState} from "react";
// import pizzas from './components/pizza.json'


function App() {
    const [searchValue, setSearchValue] = useState('')

    console.log('searchValue', searchValue)

    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home searchValue={searchValue} />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="*" element={<NotFound />} /> {/* Маршрут для 404 */}
                </Routes>
            </div>
        </div>
    )
}

export default App

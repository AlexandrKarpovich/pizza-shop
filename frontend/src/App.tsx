import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { Routes, Route } from 'react-router-dom';
import Cart from "./pages/Cart";
// import "./css/app.css"
import "./scss/app.scss"
import React, {createContext, useState} from "react";

export const SearchContext = createContext();

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="wrapper">
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} /> {/* Маршрут для 404 */}
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    )
}

export default App

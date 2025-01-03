import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import App from './App.tsx'


import { store } from './redux/store';
import {Provider} from "react-redux";

// console.log(store)

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store} >
            {/*<StrictMode>*/}
            <App />
            {/*</StrictMode>,*/}
        </Provider>
    </BrowserRouter>

)

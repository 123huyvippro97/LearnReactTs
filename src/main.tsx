import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import MainFlow from "./components/MainFlow";
import Day2 from "./components/day2/Day2";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Day2/>
        {/*<App/>*/}
        {/*<HeaderComponent />*/}
        {/*<MainFlow />*/}
        {/*<FooterComponent />*/}
    </StrictMode>,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import MainFlow from "./components/MainFlow";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {/*<App/>*/}
        <HeaderComponent />
        <MainFlow />
        <FooterComponent />
    </StrictMode>,
)

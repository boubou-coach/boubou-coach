import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import ReactGA from "react-ga4";
import App from './App.tsx'
import './index.css'

registerSW({ immediate: true })

ReactGA.initialize("G-4N75KCDMQX");
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
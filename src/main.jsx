import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React, { StrictMode, useContext } from "react";

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <App />
  </StrictMode>,
)


import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'

import App from './App.jsx'

import '@fontsource/balsamiq-sans'; 

import AppRoutes from './routes/AppRoutes.jsx';

import './i18n';

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  
)

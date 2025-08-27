import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';


const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(
<BrowserRouter >
<App />
</BrowserRouter >
);


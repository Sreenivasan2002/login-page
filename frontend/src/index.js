import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const reactRoot = createRoot(root);

reactRoot.render(<React.StrictMode><App /></React.StrictMode>);

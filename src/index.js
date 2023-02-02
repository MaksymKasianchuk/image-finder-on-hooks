import React from 'react';
import ReactDOM from 'react-dom/client';
import { theme } from 'constants/theme';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
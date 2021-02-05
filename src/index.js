import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.render(
    <ParallaxProvider>
        <App />
    </ParallaxProvider>,
    document.getElementById('root')
);

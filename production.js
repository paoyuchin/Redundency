import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './src/css.scss';
import App from './src/App';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';

const rootLen = document.getElementsByClassName('activityRoot').length;

for (let i = 0; i <= rootLen - 1; i++) {
    ReactDOM.render(
        <App number={i} />,
        document.getElementsByClassName('activityRoot')[i]
    );
}
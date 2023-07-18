import JournalApp from 'JournalApp';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss';
import { Provider } from "react-redux";
import { store } from 'store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <JournalApp />
    </Provider>
);


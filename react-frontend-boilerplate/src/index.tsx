import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import LoadingContainer from 'components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

ReactDOM.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <LoadingContainer>
                <ToastContainer autoClose={4000} hideProgressBar={false} closeOnClick pauseOnFocusLoss />
                <App />
            </LoadingContainer>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();

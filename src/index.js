import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/layout.css';
import './styles/header.css';
import './styles/title.css';
import './styles/form.css';
import './styles/wazzup-list.css';


ReactDOM.render(<AppRouter />, document.getElementById('root'));

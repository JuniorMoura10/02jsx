import React from 'react';
import ReactDOM from 'react-dom';

// Sem JSX
//const elemento = React.createElement('h1', {}, 'Sem JSX');
//ReactDOM.render(elemento, document.getElementById('root'));

// Com JSX (que é o recomendado pelo react) eu escrevo bem menos código
ReactDOM.render(<h1>Com JSX</h1>, document.getElementById('root'));
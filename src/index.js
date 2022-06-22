import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProductsProvider } from './context/shop_data/shop_data.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ProductsProvider>
		<App />
	</ProductsProvider>
);

reportWebVitals();

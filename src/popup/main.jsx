import React from 'react';
import ReactDOM from 'react-dom/client';
import Popup from './Popup.jsx';
import '../index.css';
import getProxyStore from '../chromeStorageRedux/ProxyStore.js';

console.log(`This is the Popup file!!!`);

const proxyStore = getProxyStore();

async function subscribeToPersistentStoreChanges() {
	console.log(`main.jsx - Inside popup context - testing proxy store`);
	proxyStore.ready(async () => {
		console.log(`Popup - main.jsx Context : Proxy Store is now ready`);
		ReactDOM.createRoot(document.getElementById('root')).render(
			<React.StrictMode>
				<Popup proxyStore={proxyStore} />
			</React.StrictMode>
		);
	});
}

setTimeout(() => {
	subscribeToPersistentStoreChanges();
}, 3000);

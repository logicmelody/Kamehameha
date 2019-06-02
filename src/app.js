import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initializeStore from './initialize-store';

import Kamehameha from './components/kamehameha';

const store = initializeStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Kamehameha />
			</Provider>
		);
	}
}

export default App;

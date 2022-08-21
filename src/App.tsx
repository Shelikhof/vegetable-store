import React from 'react';
import './scss/App.scss';
import Header from './components/Header/Header';
import MobileHeader from './components/Header/MobileHeader';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			{/* <Header /> */}
			{/* <MobileHeader /> */}
			<HomePage />
			{/* <Footer /> */}
		</div>
	);
}

export default App;

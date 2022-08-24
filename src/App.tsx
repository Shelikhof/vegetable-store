import React, { useEffect, useState } from 'react';
import './scss/App.scss';
import Header from './components/Header/Header';
import MobileHeader from './components/Header/MobileHeader';
import HomePage from './pages/HomePage';
import Footer from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './components/redux/hooks';
import { setIsDesktop } from './components/redux/reducers/isDesktopSlice';

function App() {
	const { isDesktop } = useAppSelector((state) => state.isDesktop);
	const dispatch = useAppDispatch();
	const [width, setWidth] = useState<number>(window.innerWidth);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}
	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, []);

	if (width <= 1024) {
		dispatch(setIsDesktop(false));
	} else {
		dispatch(setIsDesktop(true));
	}

	return (
		<div>
			{isDesktop ? <Header /> : <MobileHeader />}
			<HomePage />
			<Footer />
		</div>
	);
}

export default App;

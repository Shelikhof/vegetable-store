import React, { useEffect, useRef, useState } from 'react';
import styles from './MobileMapPopUp.module.scss';
import logo1 from '../../../assets/img/logos/logo1.svg';
import logo2 from '../../../assets/img/logos/logo2.svg';
import logo3 from '../../../assets/img/logos/logo3.svg';

interface MobileMapPopUpProp {
	setIsOpen: Function;
}

const MobileMapPopUp: React.FC<MobileMapPopUpProp> = ({ setIsOpen }) => {
	const [isOpenCity, setIsOpenCity] = useState(false);
	const [isOpenRegion, setIsOpenRegion] = useState(false);
	const [isOpenLeft, setIsOpenLeft] = useState(true);
	const cityRef = useRef<HTMLDivElement>(null);
	const regionRef = useRef<HTMLDivElement>(null);
	const bodyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const clickOutside = (e: MouseEvent) => {
			const _e = e as MouseEvent & {
				path: Node[];
			};

			if (cityRef.current && !_e.path.includes(cityRef.current)) {
				setIsOpenCity(false);
			}
			if (regionRef.current && !_e.path.includes(regionRef.current)) {
				setIsOpenRegion(false);
			}
		};
		bodyRef.current && bodyRef.current.addEventListener('click', clickOutside);
		return () => {
			bodyRef.current && bodyRef.current.removeEventListener('click', clickOutside);
		};
	}, []);
	return (
		<div className={styles.wrapper} ref={bodyRef}>
			<header className={styles.header}>
				<button onClick={() => setIsOpen(false)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='12'
						viewBox='0 0 24 12'
						fill='none'>
						<path
							d='M0.274969 6.66362C0.27525 6.6639 0.275485 6.66423 0.275813 6.66451L5.17444 11.5395C5.54142 11.9047 6.135 11.9033 6.5003 11.5363C6.86555 11.1693 6.86414 10.5758 6.49716 10.2105L3.20822 6.93751L23.0625 6.93751C23.5803 6.93751 24 6.51779 24 6.00001C24 5.48223 23.5803 5.06251 23.0625 5.06251L3.20827 5.06251L6.49711 1.78952C6.86409 1.42427 6.8655 0.83069 6.50025 0.463706C6.13495 0.0966287 5.54133 0.0953634 5.17439 0.460519L0.275765 5.33551C0.275484 5.33579 0.27525 5.33612 0.274921 5.3364C-0.0922505 5.70287 -0.0910783 6.29837 0.274969 6.66362Z'
							fill='#FFB526'
						/>
					</svg>
				</button>
				<p>Select your city and store to shop</p>
			</header>
			<div className={styles.switch}>
				<ul>
					<li className={isOpenLeft ? styles.itemActive : ''} onClick={() => setIsOpenLeft(true)}>
						List
					</li>
					<li className={!isOpenLeft ? styles.itemActive : ''} onClick={() => setIsOpenLeft(false)}>
						Map
					</li>
				</ul>
			</div>
			{isOpenLeft ? (
				<div className={styles.contentLeft}>
					<div className={styles.option}>
						<div
							className={styles.selection}
							onClick={() => setIsOpenCity(!isOpenCity)}
							ref={cityRef}>
							<span>City</span>
							<p>Hamilton</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='10'
								viewBox='0 0 14 10'
								fill='none'>
								<path
									opacity='0.6'
									d='M13.3244 0.00012207H0.675053C0.0764671 0.00012207 -0.228473 0.903648 0.200702 1.44012L6.52539 9.34598C6.78515 9.67068 7.21433 9.67068 7.4742 9.34598L13.7989 1.44012C14.2279 0.903648 13.923 0.00012207 13.3244 0.00012207Z'
									fill='#6C7584'
								/>
							</svg>
							{isOpenCity && (
								<ul className={styles.selectionPopUp}>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
								</ul>
							)}
						</div>
						<div
							className={styles.selection}
							onClick={() => setIsOpenRegion(!isOpenRegion)}
							ref={regionRef}>
							<span>Region</span>
							<p>Whitiora</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='14'
								height='10'
								viewBox='0 0 14 10'
								fill='none'>
								<path
									opacity='0.6'
									d='M13.3244 0.00012207H0.675053C0.0764671 0.00012207 -0.228473 0.903648 0.200702 1.44012L6.52539 9.34598C6.78515 9.67068 7.21433 9.67068 7.4742 9.34598L13.7989 1.44012C14.2279 0.903648 13.923 0.00012207 13.3244 0.00012207Z'
									fill='#6C7584'
								/>
							</svg>
							{isOpenRegion && (
								<ul className={styles.selectionPopUp}>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
									<li className={styles.popUpText}>New York</li>
								</ul>
							)}
						</div>
					</div>
					<p className={styles.title}>Select a store to shop</p>
					<div className={styles.storeList}>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelected}>Selected</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo2} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo3} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelected}>Selected</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo2} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo3} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
						<div className={styles.listItem}>
							<img src={logo1} alt='logo' />
							<div className={styles.itemInfo}>
								<p className={styles.storeName}>PAK’nSAVE</p>
								<p className={styles.storeAddress}>Address 1</p>
							</div>
							<button className={styles.btnSelect}>Select</button>
						</div>
					</div>
				</div>
			) : (
				<div className={styles.contentRight}></div>
			)}
			<button className={styles.applyBtn}>APPLY</button>
		</div>
	);
};

export default MobileMapPopUp;

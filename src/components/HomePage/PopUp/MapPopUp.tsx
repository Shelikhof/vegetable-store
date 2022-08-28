import React, { useEffect, useRef, useState } from 'react';
import styles from './MapPopUp.module.scss';
import logo1 from '../../../assets/img/logos/logo1.svg';
import logo2 from '../../../assets/img/logos/logo2.svg';
import logo3 from '../../../assets/img/logos/logo3.svg';

interface IChooseMapPopUp {
	setIsOpen: Function;
}

const MapPopUp: React.FC<IChooseMapPopUp> = ({ setIsOpen }) => {
	const [isOpenCity, setIsOpenCity] = useState(false);
	const [isOpenRegion, setIsOpenRegion] = useState(false);
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
		<div className={styles.background} onClick={() => setIsOpen(false)}>
			<div className={styles.body} onClick={(e) => e.stopPropagation()}>
				<div className={styles.wrapper} ref={bodyRef}>
					<div className={styles.header}>
						<p>Select your city and store to shop</p>
						<button onClick={() => setIsOpen(false)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='22'
								height='22'
								viewBox='0 0 22 22'
								fill='none'>
								<path
									d='M12.9548 11.0002L21.2617 2.693C21.8023 2.15265 21.8023 1.27898 21.2617 0.738636C20.7214 0.198287 19.8477 0.198287 19.3074 0.738636L11.0001 9.04583L2.69319 0.738636C2.15259 0.198287 1.27918 0.198287 0.738826 0.738636C0.198223 1.27898 0.198223 2.15265 0.738826 2.693L9.04578 11.0002L0.738826 19.3074C0.198223 19.8477 0.198223 20.7214 0.738826 21.2618C1.00811 21.5313 1.36219 21.6667 1.71601 21.6667C2.06983 21.6667 2.42365 21.5313 2.69319 21.2618L11.0001 12.9546L19.3074 21.2618C19.5769 21.5313 19.9307 21.6667 20.2845 21.6667C20.6384 21.6667 20.9922 21.5313 21.2617 21.2618C21.8023 20.7214 21.8023 19.8477 21.2617 19.3074L12.9548 11.0002Z'
									fill='#6C7584'
								/>
							</svg>
						</button>
					</div>
					<div className={styles.content}>
						<div className={styles.map}></div>
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
							<p className={styles.optionTitle}>Select a store to shop</p>
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
							</div>
						</div>
					</div>
					<div className={styles.btnWrapper}>
						<button className={styles.applyBtn} onClick={() => setIsOpen(false)}>
							APPLY
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MapPopUp;

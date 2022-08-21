import React from 'react';
import styles from './HeaderMenu.module.scss';
import logo from '../../assets/img/logo.svg';
import closeBtn from '../../assets/img/close-btn.svg';

interface HeaderMenuProp {
	setIsOpen: Function;
}

const HeaderMenu: React.FC<HeaderMenuProp> = ({ setIsOpen }) => {
	const onClickWrapper = (e: React.MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
		setIsOpen(false);
	};

	return (
		<div onClick={() => setIsOpen(false)} className={styles.wrapper}>
			<nav className={styles.menuWrapper} onClick={(e) => e.stopPropagation()}>
				<div>
					<button onClick={() => setIsOpen(false)}>
						<img src={closeBtn} />
					</button>
					<a href='#'>
						<img src={logo} />
					</a>
				</div>

				<ul className={styles.menu}>
					<li>Home</li>
					<li>Products</li>
					<li>Cart</li>
					<li>My List</li>
					<li>Sales & Discounts</li>
				</ul>
			</nav>
		</div>
	);
};

export default HeaderMenu;

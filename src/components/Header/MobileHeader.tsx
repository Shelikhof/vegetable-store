import React, { useState } from 'react';
import styles from './MobileHeader.module.scss';
import menuOpenSVG from '../../assets/img/menu-open.svg';
import shoppingCartSVG from '../../assets/img/shopping-cart.svg';
import userIconSVG from '../../assets/img/user-icon.svg';
import HeaderMenu from './HeaderMenu';

const MobileHeader: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{isOpen && <HeaderMenu setIsOpen={setIsOpen} />}

			<header className={styles.wrapper}>
				<div className={styles.wrapperItemsLeft}>
					<button onClick={() => setIsOpen(!isOpen)}>
						<img src={menuOpenSVG} />
					</button>
					<span>Home</span>
				</div>
				<div>
					<a className={styles.cartIcon} href='#'>
						<img src={shoppingCartSVG} />
						<div>
							<span>2</span>
						</div>
					</a>
					<a className={styles.userIcon} href='#'>
						<img src={userIconSVG} />
					</a>
				</div>
			</header>
		</>
	);
};

export default MobileHeader;

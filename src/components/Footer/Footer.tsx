import React from 'react';
import styles from './Footer.module.scss';
import MasterCardSVG from '../../assets/img/MasterCard.svg';
import PayPalSVG from '../../assets/img/PayPal.svg';

const Footer: React.FC = () => {
	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.container}>
				<div className={styles.footerItems}>
					<p>Copyright 2021 vegist rights reserved</p>
					<div>
						<img src={MasterCardSVG} alt='mastercardlogo' />
						<img src={PayPalSVG} alt='paypallogo' />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

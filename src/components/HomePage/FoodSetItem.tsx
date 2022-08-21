import React from 'react';
import styles from './FoodSetItem.module.scss';
import storeLogo from '../../assets/img/logos/logo1.svg';
import setIcon from '../../assets/img/foodSet/setIcon1.jpg';
import food1 from '../../assets/img/foodSet/food1.jpg';
import food2 from '../../assets/img/foodSet/food2.jpg';
import food3 from '../../assets/img/foodSet/food3.jpg';

const FoodSetItem: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<img className={styles.setIcon} src={setIcon} alt='set icon' />
				<p>Organic Fresh Drinks </p>
				<img className={styles.storeLogo} src={storeLogo} alt='store logo' />
			</div>
			<div className={styles.list}>
				<div className={styles.item}>
					<div className={styles.itemImage}>
						<img src={food1} alt='food' />
						<span>Fresh Orange</span>
					</div>
					<div className={styles.itemPrice}>
						<p>
							<span>$29.80</span>/kg
						</p>
						<span className={styles.itemDiscount}>-25%</span>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImage}>
						<img src={food2} alt='food' />
						<span>Fresh organic papaya (50gm)</span>
					</div>
					<div className={styles.itemPrice}>
						<p>
							<span>$29.80</span>/kg
						</p>
						<span className={styles.itemDiscount}>-25%</span>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImage}>
						<img src={food3} alt='food' />
						<span>Red Apple</span>
					</div>
					<div className={styles.itemPrice}>
						<p>
							<span>$29.80</span>/kg
						</p>
						<span className={styles.itemDiscount}>-25%</span>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImage}>
						<img src={food1} alt='food' />
						<span>Fresh Orange</span>
					</div>
					<div className={styles.itemPrice}>
						<p>
							<span>$29.80</span>/kg
						</p>
						<span className={styles.itemDiscount}>-25%</span>
					</div>
				</div>
				<div className={styles.item}>
					<div className={styles.itemImage}>
						<img src={food1} alt='food' />
						<span>Fresh Orange</span>
					</div>
					<div className={styles.itemPrice}>
						<p>
							<span>$29.80</span>/kg
						</p>
						<span className={styles.itemDiscount}>-25%</span>
					</div>
				</div>
				<button>
					<span>+3 MORE</span>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M12.5488 17.5735L21.7738 8.32292C22.0759 8.01983 22.0754 7.52913 21.7723 7.22655C21.4692 6.92421 20.9782 6.92499 20.6759 7.22812L12 15.9281L3.32406 7.2278C3.02172 6.92472 2.53105 6.92394 2.22793 7.22624C2.07598 7.37792 2 7.57663 2 7.77534C2 7.97354 2.07547 8.17147 2.22637 8.32288L11.4511 17.5735C11.5964 17.7195 11.794 17.8014 12 17.8014C12.2059 17.8014 12.4033 17.7192 12.5488 17.5735Z'
							fill='#FFB526'
						/>
					</svg>
				</button>
			</div>
			<div className={styles.bottom}>
				<div className={styles.priceWrapper}>
					<p className={styles.priceDiscount}>
						SAVE <span>$7.45</span>
					</p>
					<p className={styles.priceNumber}>$149.00</p>
				</div>
				<button>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.13281 17.8438H17.7879C19.2248 17.8438 20.4968 16.8831 20.8826 15.507L22.9743 8.31277C23.031 8.11803 22.9927 7.90804 22.8709 7.74588C22.7492 7.58371 22.5582 7.48828 22.3555 7.48828H6.07238L5.31552 3.9553C4.94724 2.24287 3.40337 1 1.64453 1C1.28858 1 1 1.28858 1 1.64453C1 2.00048 1.28858 2.28906 1.64453 2.28906C2.78136 2.28906 3.81776 3.12193 4.05521 4.22584L6.42734 15.2987C6.54761 15.858 6.81728 16.3753 7.20039 16.7951C6.60407 17.1248 6.19922 17.76 6.19922 18.4883C6.19922 19.3787 6.80443 20.1301 7.62497 20.3537C7.53714 20.5745 7.48828 20.8148 7.48828 21.0664C7.48828 22.1326 8.35569 23 9.42188 23C10.4881 23 11.3555 22.1326 11.3555 21.0664C11.3555 20.8405 11.3162 20.6236 11.2446 20.4214H16.6226C16.551 20.6236 16.5117 20.8405 16.5117 21.0664C16.5117 22.1326 17.3791 23 18.4453 23C19.5115 23 20.3789 22.1326 20.3789 21.0664C20.3789 20.8405 20.3396 20.6236 20.268 20.4219H21.0234C21.3794 20.4219 21.668 20.1333 21.668 19.7773C21.668 19.4214 21.3794 19.1328 21.0234 19.1328H8.13281C7.77742 19.1328 7.48828 18.8437 7.48828 18.4883C7.48828 18.1329 7.77742 17.8438 8.13281 17.8438ZM18.4453 20.4219C18.8007 20.4219 19.0898 20.711 19.0898 21.0664C19.0898 21.4218 18.8007 21.7109 18.4453 21.7109C18.0899 21.7109 17.8008 21.4218 17.8008 21.0664C17.8008 20.711 18.0899 20.4219 18.4453 20.4219ZM9.42188 20.4219C9.77727 20.4219 10.0664 20.711 10.0664 21.0664C10.0664 21.4218 9.77727 21.7109 9.42188 21.7109C9.06648 21.7109 8.77734 21.4218 8.77734 21.0664C8.77734 20.711 9.06648 20.4219 9.42188 20.4219ZM6.34858 8.77734H21.4969C21.4969 8.77734 19.6427 15.1546 19.642 15.1568C19.4124 15.9799 18.6499 16.5547 17.7879 16.5547H9.5779C8.67284 16.5547 7.87784 15.9125 7.68766 15.0281L6.34858 8.77734ZM17.0515 15.2386C17.4042 15.2968 17.7346 15.0572 17.7922 14.7075L18.4368 10.7973C18.4946 10.4461 18.2569 10.1144 17.9056 10.0566C17.5544 9.99869 17.2228 10.2365 17.1648 10.5877L16.5203 14.4979C16.4624 14.8491 16.7002 15.1808 17.0515 15.2386ZM10.075 14.7075C10.1328 15.0583 10.4642 15.2966 10.8158 15.2386C11.167 15.1808 11.4048 14.8491 11.3469 14.4979L10.7024 10.5877C10.6445 10.2365 10.313 9.99869 9.96161 10.0566C9.61038 10.1144 9.37259 10.4461 9.43047 10.7973L10.075 14.7075ZM13.9336 15.2472C14.2895 15.2472 14.5781 14.9587 14.5781 14.6027V10.6925C14.5781 10.3366 14.2895 10.048 13.9336 10.048C13.5776 10.048 13.2891 10.3366 13.2891 10.6925V14.6027C13.2891 14.9587 13.5776 15.2472 13.9336 15.2472Z'
							fill='#FFFFFF'
						/>
					</svg>
					<span>Add to cart</span>
				</button>
			</div>
		</div>
	);
};

export default FoodSetItem;

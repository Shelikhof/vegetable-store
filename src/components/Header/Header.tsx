import logo from '../../assets/img/logo.svg';
import styles from './Header.module.scss';
import MobileHeader from './MobileHeader';

const Header: React.FC = () => {
	return (
		<>
			<header className={styles.container}>
				<div className={styles.wrapper}>
					<a className={styles.logo} href='#'>
						<img src={logo} />
					</a>
					<ul className={styles.menuList}>
						<li className={styles.active}>Home</li>
						<li>Products</li>
						<li>My Lists</li>
						<li>Sales & Discounts</li>
					</ul>
					<div className={styles.itemsWrapper}>
						<a href='#'>
							<div className={styles.itemsWrapper_busket}>
								<svg
									width='22'
									height='22'
									viewBox='0 0 22 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M7.13281 16.8438H16.7879C18.2248 16.8438 19.4968 15.8831 19.8826 14.507L21.9743 7.31277C22.031 7.11803 21.9927 6.90804 21.8709 6.74588C21.7492 6.58371 21.5582 6.48828 21.3555 6.48828H5.07238L4.31552 2.9553C3.94724 1.24287 2.40337 0 0.644531 0C0.288578 0 0 0.288578 0 0.644531C0 1.00048 0.288578 1.28906 0.644531 1.28906C1.78136 1.28906 2.81776 2.12193 3.05521 3.22584L5.42734 14.2987C5.54761 14.858 5.81728 15.3753 6.20039 15.7951C5.60407 16.1248 5.19922 16.76 5.19922 17.4883C5.19922 18.3787 5.80443 19.1301 6.62497 19.3537C6.53714 19.5745 6.48828 19.8148 6.48828 20.0664C6.48828 21.1326 7.35569 22 8.42188 22C9.48806 22 10.3555 21.1326 10.3555 20.0664C10.3555 19.8405 10.3162 19.6236 10.2446 19.4214H15.6226C15.551 19.6236 15.5117 19.8405 15.5117 20.0664C15.5117 21.1326 16.3791 22 17.4453 22C18.5115 22 19.3789 21.1326 19.3789 20.0664C19.3789 19.8405 19.3396 19.6236 19.268 19.4219H20.0234C20.3794 19.4219 20.668 19.1333 20.668 18.7773C20.668 18.4214 20.3794 18.1328 20.0234 18.1328H7.13281C6.77742 18.1328 6.48828 17.8437 6.48828 17.4883C6.48828 17.1329 6.77742 16.8438 7.13281 16.8438ZM17.4453 19.4219C17.8007 19.4219 18.0898 19.711 18.0898 20.0664C18.0898 20.4218 17.8007 20.7109 17.4453 20.7109C17.0899 20.7109 16.8008 20.4218 16.8008 20.0664C16.8008 19.711 17.0899 19.4219 17.4453 19.4219ZM8.42188 19.4219C8.77727 19.4219 9.06641 19.711 9.06641 20.0664C9.06641 20.4218 8.77727 20.7109 8.42188 20.7109C8.06648 20.7109 7.77734 20.4218 7.77734 20.0664C7.77734 19.711 8.06648 19.4219 8.42188 19.4219ZM5.34858 7.77734H20.4969C20.4969 7.77734 18.6427 14.1546 18.642 14.1568C18.4124 14.9799 17.6499 15.5547 16.7879 15.5547H8.5779C7.67284 15.5547 6.87784 14.9125 6.68766 14.0281L5.34858 7.77734ZM16.0515 14.2386C16.4042 14.2968 16.7346 14.0572 16.7922 13.7075L17.4368 9.79735C17.4946 9.44612 17.2569 9.11444 16.9056 9.05657C16.5544 8.99869 16.2228 9.23648 16.1648 9.5877L15.5203 13.4979C15.4624 13.8491 15.7002 14.1808 16.0515 14.2386ZM9.075 13.7075C9.13284 14.0583 9.46421 14.2966 9.81578 14.2386C10.167 14.1808 10.4048 13.8491 10.3469 13.4979L9.70239 9.5877C9.64451 9.23648 9.31296 8.99869 8.96161 9.05657C8.61038 9.11444 8.37259 9.44612 8.43047 9.79735L9.075 13.7075ZM12.9336 14.2472C13.2895 14.2472 13.5781 13.9587 13.5781 13.6027V9.69255C13.5781 9.33659 13.2895 9.04802 12.9336 9.04802C12.5776 9.04802 12.2891 9.33659 12.2891 9.69255V13.6027C12.2891 13.9587 12.5776 14.2472 12.9336 14.2472Z'
										fill='#353535'
									/>
								</svg>
								<span>2 item</span>
							</div>
						</a>
						<a className={styles.itemsWrapper_singIn} href='#'>
							Sing in
						</a>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;

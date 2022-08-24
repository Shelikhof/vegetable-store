import React, { useState } from 'react';
import styles from './index.module.scss';
import logo1 from '../../assets/img/logos/logo1.svg';
import logo2 from '../../assets/img/logos/logo2.svg';
import logo3 from '../../assets/img/logos/logo3.svg';
import logo4 from '../../assets/img/logos/logo4.svg';
import logo5 from '../../assets/img/logos/logo5.svg';
import GroceryItem from './GroceryItem';
import FoodSetItem from '../FoodSet/FoodSetItem';
import ChooseMapPopUp from './ChooseMapPopUp';

const Home: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			{isOpen && <ChooseMapPopUp isOpen setIsOpen={setIsOpen} />}
			<div className={styles.chooseWrapper}>
				<div className={styles.container}>
					<p className={styles.chooseWrapperTitle}>
						YOU CAN <span className={styles.chooseWrapperTitleRed}>SAVE </span>
						<span className={styles.chooseWrapperTitleYellow}>UP TO 50$</span>
						<br /> ON AVERAGE SMART GROCERY SHOPPING
					</p>
					<p className={styles.chooseWrapperSubTitle}>
						Plan your shopping, find cheapest grocery prices
						<br /> and save more.
					</p>
					<div className={styles.locationSelectWrapper}>
						<div className={styles.locationSelectWrapperCity}>
							<span className={styles.locationSelectWrapperSign}>City</span>
							<input type='text' />
						</div>
						<div className={styles.locationSelectWrapperRegion}>
							<span className={styles.locationSelectWrapperSign}>Region</span>
							<input type='text' value='Whitiora' />
						</div>
						<div className={styles.locationSelectWrapperMap} onClick={() => setIsOpen(true)}>
							<svg
								className={styles.mapIcon}
								width='40'
								height='40'
								viewBox='0 0 40 40'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<rect width='40' height='40' rx='8' fill='#FFB526' />
								<path
									d='M20 4C13.7968 4 8.75 9.04675 8.75 15.25C8.75 17.3459 9.33056 19.3913 10.4293 21.1658L19.3596 35.5568C19.5307 35.8325 19.8321 36 20.1562 36C20.1587 36 20.1611 36 20.1636 36C20.4906 35.9974 20.7926 35.8248 20.9605 35.5443L29.6632 21.0138C30.7013 19.2768 31.25 17.2837 31.25 15.25C31.25 9.04675 26.2033 4 20 4ZM28.0541 20.0511L20.142 33.2616L12.0229 20.1779C11.1084 18.7009 10.6125 16.9969 10.6125 15.25C10.6125 10.0806 14.8306 5.8625 20 5.8625C25.1694 5.8625 29.3813 10.0806 29.3813 15.25C29.3813 16.9451 28.9181 18.6055 28.0541 20.0511Z'
									fill='white'
								/>
								<path
									d='M20 9.625C16.8984 9.625 14.375 12.1484 14.375 15.25C14.375 18.3318 16.8573 20.875 20 20.875C23.1814 20.875 25.625 18.2979 25.625 15.25C25.625 12.1484 23.1016 9.625 20 9.625ZM20 19.0125C17.9214 19.0125 16.2375 17.3229 16.2375 15.25C16.2375 13.1823 17.9323 11.4875 20 11.4875C22.0677 11.4875 23.7563 13.1823 23.7563 15.25C23.7563 17.2927 22.1115 19.0125 20 19.0125Z'
									fill='white'
								/>
							</svg>
							<span>Find on the map</span>
						</div>
						<div className={styles.locationSelectWrapperStoreList}>
							<span className={styles.locationSelectWrapperSign}>Store</span>
							<img src={logo1} alt='logo' />
							<img src={logo4} alt='logo' />
						</div>
						<button className={styles.locationSelectWrapperBtn}>
							<span>Let's assemble the cart</span>
							<svg
								width='32'
								height='32'
								viewBox='0 0 32 32'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<g clipPath='url(#clip0_334_2475)'>
									<path
										d='M31.6334 15.1152C31.633 15.1148 31.6327 15.1144 31.6322 15.114L25.1007 8.614C24.6114 8.12706 23.82 8.12887 23.3329 8.61825C22.8459 9.10756 22.8478 9.89899 23.3371 10.386L27.7224 14.75H1.25C0.559625 14.75 0 15.3096 0 16C0 16.6904 0.559625 17.25 1.25 17.25H27.7223L23.3372 21.614C22.8479 22.101 22.846 22.8924 23.333 23.3817C23.8201 23.8712 24.6116 23.8728 25.1008 23.386L31.6323 16.886C31.6327 16.8856 31.633 16.8852 31.6334 16.8848C32.123 16.3962 32.1214 15.6022 31.6334 15.1152Z'
										fill='white'
									/>
								</g>
								<defs>
									<clipPath id='clip0_334_2475'>
										<rect width='32' height='32' fill='white' />
									</clipPath>
								</defs>
							</svg>
						</button>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.groceryListWrapper}>
					<p className={styles.groceryListTitle}>
						<span className='title'>BEST GROCERY DEALS FOR KIWIS</span>
					</p>
					<p className={styles.groceryListSubTitle}>
						Plan your shopping, find cheapest grocery prices and save more
					</p>
					<div>
						<div className={styles.groceryList}>
							<GroceryItem logoUrl={logo1} discount={50} title='PAK’nSAVE' />
							<GroceryItem logoUrl={logo2} discount={70} title='New World' />
							<GroceryItem logoUrl={logo3} discount={30} title='countdown' />
							<GroceryItem logoUrl={logo4} discount={50} title='farro' />
							<GroceryItem logoUrl={logo5} discount={45} title='FOUR SQUARE' />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.container}>
				<div className={styles.foodSetWrapper}>
					<p className={styles.foodSetTitle}>
						<span className='title'>Popular grocery sets</span>
					</p>
					<p className={styles.foodSetSubTitle}>Products are shown by your location</p>
					<div className={styles.foodSetListWrapper}>
						<div className={styles.foodSetList}>
							<FoodSetItem />
							<FoodSetItem />
							<FoodSetItem />
						</div>
					</div>
					<button className={styles.foodSetMoreBtn}>
						<span>More SETS</span>
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
			</div>
			<div className={styles.foodSearchWrapper}>
				<p>The site will help you choose the most optimal food cart</p>
				<button>
					<span>Food Search</span>
					<svg
						width='32'
						height='32'
						viewBox='0 0 32 32'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<g clipPath='url(#clip0_334_2475)'>
							<path
								d='M31.6334 15.1152C31.633 15.1148 31.6327 15.1144 31.6322 15.114L25.1007 8.614C24.6114 8.12706 23.82 8.12887 23.3329 8.61825C22.8459 9.10756 22.8478 9.89899 23.3371 10.386L27.7224 14.75H1.25C0.559625 14.75 0 15.3096 0 16C0 16.6904 0.559625 17.25 1.25 17.25H27.7223L23.3372 21.614C22.8479 22.101 22.846 22.8924 23.333 23.3817C23.8201 23.8712 24.6116 23.8728 25.1008 23.386L31.6323 16.886C31.6327 16.8856 31.633 16.8852 31.6334 16.8848C32.123 16.3962 32.1214 15.6022 31.6334 15.1152Z'
								fill='white'
							/>
						</g>
						<defs>
							<clipPath id='clip0_334_2475'>
								<rect width='32' height='32' fill='white' />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</>
	);
};

export default Home;

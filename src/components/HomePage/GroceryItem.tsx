import React from 'react';
import styles from './GroceryItem.module.scss';

interface GroceryItemProps {
	logoUrl: string;
	discount: number;
	title: string;
}

const GroceryItem: React.FC<GroceryItemProps> = ({ logoUrl, discount, title }) => {
	return (
		<div className={styles.wrapper}>
			<span className={styles.discount}>UP TO {discount}%</span>
			<img src={logoUrl} alt='logo' />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>
				<span>321 products</span> with discounts
			</p>
		</div>
	);
};

export default GroceryItem;

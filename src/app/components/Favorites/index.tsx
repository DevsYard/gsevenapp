'use client';
import requests from '@/app/validations/axios.module';
import styles from '../../page.module.sass';
import FavCard from '../FavCard';
import { useEffect, useContext, useState } from 'react';
import SessionContext from '@/app/contexts/sessionContext';
import { Product } from '@/types/products';

export default function Favorites() {
	const session = useContext(SessionContext);
	const [selectedProducts, setSelectedProducts] = useState([]);

	useEffect(() => {
		const request = requests();
		request
			.post('/showfavorites', session)
			.then((response) => setSelectedProducts(response.data.favorites));
	}, [session]);

	return (
		<div className={styles.favorites}>
			<h3>Favorites</h3>
			{selectedProducts.map((el: any) => (
				<FavCard selectedProduct={el} key={el._id} />
			))}
		</div>
	);
}

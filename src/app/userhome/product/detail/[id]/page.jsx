'use client';

import requests from '@/app/validations/axios.module';
import { useEffect, useState } from 'react';

// interface Product {
// 	_id: string;
// 	productName: string;
// 	description: string;
// 	price: number;
// 	promo: boolean;
// 	promoPrice: number;
// 	condition: number;
// 	img: string;
// }

export default function Details({ id }) {
	const [product, setProduct] = useState('');

	useEffect(() => {
		console.log(id);
		const request = requests();
		const url = `/product/details/${id}`;

		request
			.get(url)
			.then((prod) => setProduct(prod))
			.catch((error) => {
				console.error('Error fetching product details:', error);
			});
	}, [id, setProduct]);

	return (
		<>
			<h1>Detalhes</h1>
			<p>Segue Produto: {product}</p>
		</>
	);
}

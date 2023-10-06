'use client';

import styles from '../../../../page.module.sass';
import requests from '@/app/validations/axios.module';
import { useEffect, useState } from 'react';
import { Product } from '@/types/products';
import Image from 'next/image';
import ContadorCompras from '@/app/components/ContadorCompras';

export default function Details(id: any) {
	const [product, setProduct] = useState<Product | undefined>();
	const [fav, setFav] = useState<string>('/favorites.svg');

	function handleFav() {
		if (fav === '/favorites.svg') {
			setFav('/heart.svg');
			// buscar a lista do banco e adicionar o novo
		} else {
			setFav('/favorites.svg');
			// buscar a lista do banco e retirar o atual
		}
	}

	useEffect(() => {
		const request = requests();
		const url = `/product/details/${id['params']['id']}`;

		request
			.get(url)
			.then((response) => {
				setProduct(response.data);
			})
			.catch((error) => {
				console.error('Error fetching product details:', error);
			});
	}, [id]);

	return (
		<div className={styles.card}>
			{product ? (
				<>
					<div className={styles.details}>
						<div className={styles.descriptionContainer}>
							<Image
								className={styles.itemPic}
								src={product?.img || ''}
								alt={product.productName}
								width={155}
								height={155}
								priority
							/>
							<div onClick={() => handleFav()} className={styles.heart}>
								<Image
									src={fav}
									alt='Favoritar'
									width={24}
									height={24}
									priority
								/>
							</div>
							<div className={styles.boxTexto}>
								<h3>{product.productName}</h3>
								<p>{product.description}</p>
							</div>
						</div>
					</div>
					<ContadorCompras product={product} />
				</>
			) : (
				''
			)}
		</div>
	);
}

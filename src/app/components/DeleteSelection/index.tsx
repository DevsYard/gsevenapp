'use client';

import styles from '../../page.module.sass';
import deleteStyle from './deleteSelection.module.sass';
import requests from '../../validations/axios.module';
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SessionContext from '@/app/contexts/sessionContext';
import { resolve } from 'path';

interface Product {
	_id: string;
	productName: string;
	description: string;
	price: number;
	promo: boolean;
	promoPrice: number;
	condition: number;
	img: string;
}

export default function DeleteSelection() {
	const session = useContext(SessionContext);
	const request = requests();

	const [cards, setCards] = useState<Product[]>([]);
	const [deleteProduct, setDeleteProduct] = useState('');
	const [checked, setChecked] = useState('');

	function handleProduct(e: any, id: string) {
		!e.target.checked ? setChecked('checked') : setChecked('');

		if (checked) {
			setDeleteProduct(id);
		}
		console.log(id, checked);
	}

	function handleRequest(product: string) {
		if (session.token) {
			const data = {
				userId: session.userId,
				productId: product,
			};
			request.delete('/products', { data: data }).then((res) => {
				alert(res.data.msg);
			});
		}
	}

	function reduceDesc(description: string) {
		if (description) {
			const wordsArray = description.split(' ');
			const first10Words = wordsArray.slice(0, 10);
			const result = first10Words.join(' ');
			return result + '...';
		}
	}

	useEffect(() => {
		const request = requests();
		request.get('/products').then((res) => {
			setCards(res.data);
		});
	}, []);

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.deleteProductContainer}>
				<header className={styles.cardsHeader}>
					<h2>Selecione o produto para Deletar, depois clique em Confirmar</h2>
				</header>
				{cards.map((card) => (
					<>
						<div className={styles.card} id={deleteStyle.delete}>
							<div className={styles.descriptionContainer}>
								<Link href={`/userhome/product/detail/${card._id}`}>
									<Image
										className={styles.itemPic}
										src={card.img || ''}
										alt={card.productName}
										width={100}
										height={100}
										priority
									/>
								</Link>
							</div>
							<div className={styles.boxTexto}>
								<h3>{card.productName}</h3>
								<p>{reduceDesc(card.description)}</p>
							</div>
							<div className={styles.checkerBtn}>
								<input
									id={card._id}
									className={styles.checkers}
									name='deleteProduct'
									type='checkbox'
									value={card._id}
									onChange={(e) => handleProduct(e, card._id)}
								/>
								<input
									type='button'
									className={styles.inputBtn}
									id={styles.deleteBtn}
									value='Confirmar'
									onClick={() => handleRequest(card._id)}
								/>
							</div>
						</div>
					</>
				))}
			</div>
		</SessionContext.Provider>
	);
}

export function DescComponent(desc: string | undefined) {
	return <p>{desc}</p>;
}

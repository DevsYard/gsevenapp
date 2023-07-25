import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import Card from '../Card/index'
import requests from '../../validations/axios.module';
import { useEffect, useState } from 'react';

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

export default function Main() {
	const [cards, setCards] = useState<Product[]>([]);
	// const cards: Product[] = [];

	useEffect(() => {
		const request = requests();
		request.get('/products').then((res: any) => {
			setCards(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<main className={styles.mainPage}>
			<>
				<header className={styles.cardsHeader}>
					<h2>Melhores ofertas</h2>
					<h5>Ordenar</h5>
				</header>
				{cards.map((card) => (
					<Card
						key={card._id}
						productName={card.productName}
						description={card.description}
						productPrice={card.price}
						promo={card.promo}
						promoPrice={card.promoPrice}
						condition={card.condition}
						img={card.img}
					/>
				))}
			</>
		</main>
	);
}


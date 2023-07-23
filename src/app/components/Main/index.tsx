import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import Card from '../Card/index'
import requests from '../../validations/axios.module';
import { useEffect, useState } from 'react';

export default function Main() {
	const [cards, setCards] = useState([]);

	useEffect(() => {
		// const request = requests();
		// request
		// 	.get('/signup')
		// 	.then((data) => {
		// 		console.log(data);
		// 		setCards(data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
		// console.log(cards);
	}, []);

	return (
		<main className={styles.mainPage}>
			<header className={styles.cardsHeader}>
				<h2>Melhores ofertas</h2>
				<h5>Ordenar</h5>
			</header>
			{/* {cards.map((card) => {
				<Card
					productName={card.productName}
					description={card.description}
					productPrice={card.price}
					promo={card.promo}
					promoPrice={card.promoPrice}
					condition={card.condition}
					img={card.img}
				/>;
			})} */}
		</main>
	);
}
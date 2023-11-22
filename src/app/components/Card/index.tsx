import Image from 'next/image';
import styles from '../../page.module.sass';
import { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { Product } from '@/types/products';
import ContadorCompras from '../ContadorCompras';
import SessionContext from '@/app/contexts/sessionContext';
import FavoriteHeart from '../FavoriteHeart';
import requests from '@/app/validations/axios.module';

export default function Card(product: Product) {
	const [desc, setDesc] = useState<string>('');
	const [key, setKey] = useState<string>('');
	const [img, setImg] = useState<string>('/default.jpg');
	const [favs, setFavs] = useState([]);

	const session = useContext(SessionContext);

	useEffect(() => {
		const request = requests();
		request.post('/showfavorites', session).then((res) => {
			setFavs(res.data.favorites);
		});
	}, [session]);

	useEffect(() => {
		setKey(product.id);
		if (product.description) {
			const wordsArray = product.description.split(' ');
			const first20Words = wordsArray.slice(0, 20);
			const result = first20Words.join(' ');
			setDesc(result + '...');
		}
		product.img !== '' ? setImg(product.img) : setImg('/default.jpg');
	}, [desc, product]);

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.card}>
				<div className={styles.descriptionContainer}>
					<Link href={`/userhome/product/details/${product.id}`}>
						<Image
							className={styles.itemPic}
							src={img}
							alt={product.productName}
							width={100}
							height={100}
							priority
						/>
					</Link>
					<FavoriteHeart produto={product} favs={favs} />
					<div className={styles.boxTexto}>
						<h3>{product.productName}</h3>
						<p>{desc}</p>
						<p>
							{product.promo
								? `Comprando a partir de ${
										product.condition
								  }, paga somente R$${product.promoPrice.toFixed(
										2
								  )} por unidade.`
								: ''}
						</p>
					</div>
				</div>
				<ContadorCompras product={{ key, ...product }} />
			</div>
		</SessionContext.Provider>
	);
}



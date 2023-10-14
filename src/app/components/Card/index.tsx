import Image from 'next/image';
import styles from '../../page.module.sass';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/products';
import ContadorCompras from '../ContadorCompras';

export default function Card(product: Product) {
	const [fav, setFav] = useState<string>('/favorites.svg');
	const [desc, setDesc] = useState<string>('');
	const [key, setKey] = useState<string>('');
	const [img, setImg] = useState<string>('/default.jpg');

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
				<div onClick={() => handleFav()} className={styles.heart}>
					<Image src={fav} alt='Favoritar' width={24} height={24} priority />
				</div>
				<div className={styles.boxTexto}>
					<h3>{product.productName}</h3>
					<p>{desc}</p>
				</div>
			</div>
			<ContadorCompras product={{ key, ...product }} />
		</div>
	);
}



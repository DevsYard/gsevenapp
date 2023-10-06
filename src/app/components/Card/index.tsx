import Image from 'next/image';
import styles from '../../page.module.sass';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product } from '@/types/products';
import ContadorCompras from '../ContadorCompras';

export default function Card(product: Product) {
	const [fav, setFav] = useState<string>('/favorites.svg');
	const [desc, setDesc] = useState<string>('');
	// const [price, setPrice] = useState<number>(0);
	// const [unidade, setUnidade] = useState<number>(0);
	// const [quantidade, setQuantidade] = useState<number>(0);

	// function handleQuantidade(e: any) {
	// 	if (e.target.innerHTML === '+') {
	// 		setQuantidade(quantidade + 1);
	// 	} else {
	// 		if (quantidade !== 0) {
	// 			setQuantidade(quantidade - 1);
	// 		}
	// 	}
	// }

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
		if (product.description) {
			const wordsArray = product.description.split(' ');
			const first20Words = wordsArray.slice(0, 20);
			const result = first20Words.join(' ');
			setDesc(result + '...');
		}
	}, [desc, product.description]);

	// useEffect(() => {
	// 	if (product.promo) {
	// 		if (quantidade >= product.condition) {
	// 			setUnidade(product.promoPrice);
	// 		} else {
	// 			setUnidade(product.productPrice);
	// 		}
	// 	} else setUnidade(product.productPrice);
	// 	setPrice(quantidade * unidade);
	// }, [quantidade, unidade, product]);

	return (
		<div className={styles.card}>
			<div className={styles.descriptionContainer}>
				<Link href={`/userhome/product/detail/${product.id}`}>
					<Image
						className={styles.itemPic}
						src={product.img || ''}
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
			{/* <div className={styles.buyContainer}>
				<div className={styles.btnContainer}>
					<button className={styles.btnCompra} onClick={handleQuantidade}>
						-
					</button>
					<div className={styles.quantidade}>{quantidade}</div>
					<button className={styles.btnCompra} onClick={handleQuantidade}>
						+
					</button>
				</div>
				<h2>R${price.toFixed(2)}</h2>
				<h6>Preço unitário: R${unidade.toFixed(2)}</h6>
			</div> */}
			<ContadorCompras product={product} />
		</div>
	);
}



import Image from 'next/image';
import styles from '../../page.module.sass';
import { useEffect, useState } from 'react';

interface Product {
	productName: string;
	description?: string;
	productPrice: number;
	promo: boolean;
	promoPrice?: number;
	condition: number;
	img: string;
}

export default function Card({
	productName,
	description,
	productPrice,
	promo,
	promoPrice,
	condition,
	img,
}: Product) {
	const [quantidade, setQuantidade] = useState<number>(0);
	const [price, setPrice] = useState<number>(0);
	const [unidade, setUnidade] = useState<number>(0); // Set an appropriate initial value
	const [fav, setFav] = useState<string>('/favorites.svg');

	function handleQuantidade(e: any) {
		if (e.target.innerHTML === '+') {
			setQuantidade(quantidade + 1);
		} else {
			if (quantidade !== 0) {
				setQuantidade(quantidade - 1);
			}
		}
	}

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
		let finalPrice: any = 0;
		if (promo) {
			finalPrice = quantidade >= condition ? promoPrice : productPrice;
		} else finalPrice = productPrice;
		setUnidade(finalPrice);
		setPrice(quantidade * unidade);
	}, [quantidade, unidade, promo, condition, productPrice, promoPrice]);

	return (
		<div className={styles.card}>
			<div className={styles.descriptionContainer}>
				<a href='product/detail'>
					<Image
						className={styles.itemPic}
						src={img || ''}
						alt={productName}
						width={155}
						height={155}
						priority
					/>
				</a>
				<div onClick={() => handleFav()} className={styles.heart}>
					<Image src={fav} alt='Favoritar' width={24} height={24} priority />
				</div>
				<div className={styles.boxTexto}>
					<h3>{productName}</h3>
					<p>{description}</p>
				</div>
			</div>
			<div className={styles.buyContainer}>
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
				<h3>R${unidade.toFixed(2)}</h3>
			</div>
		</div>
	);
}

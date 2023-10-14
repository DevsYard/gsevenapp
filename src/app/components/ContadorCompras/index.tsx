import { useEffect, useState } from 'react';
import styles from '../../page.module.sass';
import { ExtendedProduct } from '@/types/products';

export default function ContadorCompras({
	product,
}: {
	product: ExtendedProduct;
}): JSX.Element {
	const [price, setPrice] = useState<number>(0);
	const [unidade, setUnidade] = useState<number>(0);
	const [quantidade, setQuantidade] = useState<number>(0);

	function handleQuantidade(e: any) {
		if (e.target.innerHTML === '+') {
			setQuantidade(quantidade + 1);
		} else {
			if (quantidade !== 0) {
				setQuantidade(quantidade - 1);
			}
		}
	}

	useEffect(() => {
		if (product.key !== undefined) {
			if (product.promo) {
				if (quantidade >= product.condition) {
					setUnidade(product.promoPrice);
				} else {
					setUnidade(product.productPrice);
				}
			} else {
				setUnidade(product.productPrice);
			}
			setPrice(quantidade * unidade);
		}
	}, [product, unidade, price, quantidade]);

	return (
		<>
			<div className={styles.buyContainer} key={product.key}>
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
				<h6>Preço unitário: </h6>
				<h6>R${unidade.toFixed(2)}</h6>
			</div>
		</>
	);
}

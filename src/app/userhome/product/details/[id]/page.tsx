'use client';

import styles from '../../../../page.module.sass';
import style from './index.module.sass';
import requests from '@/app/validations/axios.module';
import { useContext, useEffect, useState } from 'react';
import { ExtendedProduct } from '@/types/products';
import Image from 'next/image';
import ContadorCompras from '@/app/components/ContadorCompras';
import SessionContext from '@/app/contexts/sessionContext';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import FavoriteHeart from '@/app/components/FavoriteHeart';

export default function Details(id: any) {
	const [product, setProduct] = useState<ExtendedProduct>({
		id: id,
		productName: '',
		description: '',
		productPrice: 0,
		promo: false,
		promoPrice: 0,
		condition: 0,
		img: '',
		key: '',
	});
	const [fav, setFav] = useState<string>('/favorites.svg');
	const [disable, setDisable] = useState<boolean>(true);
	const [editBg, setEditBg] = useState<string>('style.editBgOff');
	const [name, setName] = useState<string>(product.productName);
	const [favs, setFavs] = useState([]);
	const [description, setDescription] = useState<string | undefined>(
		product.description
	);

	const session = useContext(SessionContext);

	function handleDescription(e: any) {
		setDescription(e.target.value);
	}

	function handlePName(e: any) {
		setName(e.target.value);
	}

	function handleFav() {
		if (fav === '/favorites.svg') {
			setFav('/heart.svg');
		} else {
			setFav('/favorites.svg');
		}
	}

	function handleDisabled() {
		if (disable) {
			setDisable(false);
			setEditBg('style.editBgOn');
		} else {
			setDisable(true);
			setEditBg('style.editBgOff');
		}
	}

	function handleSave() {
		const request = requests();
		const url = `/product/edit/${id['params']['id']}`;

		const changes = {
			session: session,
			productName: name,
			description: description,
		};

		request.put(url, changes).then((res) => {
			alert(res.data.msg);
		});
		setEditBg('styles.editBgOff');
		setDisable(true);
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

	useEffect(() => {
		setName(product.productName);
		setDescription(product.description);
	}, [product]);

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.card}>
				{product && session.admin ? (
					<>
						<div className={styles.details}>
							<div className={styles.descriptionContainer}>
								<Image
									className={styles.itemPic}
									src={product?.img || '/default.jpg'}
									alt={product.productName}
									width={155}
									height={155}
									priority
								/>
								<FavoriteHeart produto={product} favs={favs} />
								<div className={styles.boxTexto}>
									<input
										id={editBg}
										className={style.inputBox}
										value={name}
										disabled={disable}
										onChange={(e) => handlePName(e)}
									/>
									<textarea
										id={editBg}
										className={style.areaBox}
										value={description}
										aria-readonly={true}
										disabled={disable}
										onChange={(e) => handleDescription(e)}
									/>
								</div>
							</div>
						</div>
						<div>
							<ContadorCompras product={product} />
							<button className={styles.inputBtn} onClick={handleDisabled}>
								Editar
							</button>
							<button className={styles.inputBtn} onClick={handleSave}>
								Salvar
							</button>
							<Link
								className={styles.inputBtn}
								href={`/userhome/product/edit/${id['params']['id']}`}
							>
								Editar Completo
							</Link>
						</div>
					</>
				) : (
					<>
						<div className={styles.details}>
							<div className={styles.descriptionContainer}>
								<Image
									className={styles.itemPic}
									src={product.img || '/default.jpg'}
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
									<br />
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
						</div>
						<ContadorCompras product={product} />
					</>
				)}
			</div>
		</SessionContext.Provider>
	);
}

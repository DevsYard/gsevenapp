'use client';

import style from '../../create/page.module.sass';
import styles from '@/app/page.module.sass';
import { useContext, useEffect, useState } from 'react';
import requests from '@/app/validations/axios.module';
import SessionContext from '../../../../contexts/sessionContext';
import { ExtendedProduct } from '@/types/products';

export default function EditProduct(id: any) {
	const [product, setProduct] = useState<ExtendedProduct>({
		id: id,
		productName: '',
		description: '',
		productPrice: 0,
		promo: false,
		promoPrice: 0,
		condition: 0,
		img: '',
	});
	const [productName, setProductName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [promoPrice, setPromoPrice] = useState<number>(0);
	const [condition, setCondition] = useState<number>(0);
	const [temPromo, setTemPromo] = useState<boolean>(false);
	const [image, setImage] = useState<string>('');

	const request = requests();

	function handleImage(e: any) {
		setImage(e.target.value);
	}

	function handleCondition(e: any) {
		setCondition(parseInt(e.target.value));
	}

	function handlePromoPrice(e: any) {
		if (e.target.value !== undefined) {
			setPromoPrice(parseFloat(e.target.value));
		} else {
			setPromoPrice(0);
		}
	}

	function handleProductName(e: any) {
		setProductName(e.target.value);
	}

	function handleDescription(e: any) {
		setDescription(e.target.value);
	}

	function handlePrice(e: any) {
		setPrice(parseFloat(e.target.value));
	}

	function handlePromo(e: any) {
		if (e.target.value === 'tem promo') {
			setTemPromo(true);
		} else {
			setTemPromo(false);
		}
	}

	function handleSubmit(e: any) {
		e.preventDefault();

		const changes = {
			session: session,
			productName: productName,
			description: description,
			price: price,
			promo: temPromo,
			promoPrice: promoPrice,
			condition: condition,
			img: image,
		};

		request
			.put(`/product/edit/${id['params']['id']}`, changes)
			.then((res) => {
				alert(res.data.msg);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const session = useContext(SessionContext);

	useEffect(() => {
		const request = requests();
		request
			.get(`/product/details/${id['params']['id']}`)
			.then((res) => {
				setProduct(res.data);
				setProductName(res.data.productName);
				setDescription(res.data.description);
				setPrice(res.data.price);
				setPromoPrice(res.data.promoPrice);
				setCondition(res.data.condition);
				setTemPromo(res.data.promo);
				setImage(res.data.img);
			})
			.catch((err) => {
				console.log(err);
				alert(err.data.message);
			});
	}, [id]);

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.prodCreation}>
				<h1>Editando produto</h1>
				<form
					action='submit'
					name='productCreationForm'
					className={styles.prodCreationForm}
				>
					<input
						placeholder='Nome do produto'
						className={styles.input}
						type='text'
						name='productName'
						onChange={handleProductName}
						value={productName}
					/>
					<input
						placeholder='Preço R$0,00'
						className={styles.input}
						type='number'
						name='price'
						onChange={handlePrice}
						value={price}
					/>
					<textarea
						placeholder='Descrição'
						className={styles.input}
						name='description'
						onChange={handleDescription}
						value={description}
					/>
					<div className={styles.checkerContainer}>
						<label className={styles.radio} htmlFor='promoType'>
							<input
								className={styles.checkers}
								name='promoType'
								type='radio'
								value='não tem'
								onChange={handlePromo}
								checked={temPromo ? false : true}
							/>
							Sem Promo
						</label>
						<label className={styles.radio} htmlFor='promoType'>
							<input
								className={styles.checkers}
								name='promoType'
								type='radio'
								value='tem promo'
								onChange={handlePromo}
								checked={temPromo ? true : false}
							/>
							Tem Promo
						</label>
					</div>
					<input
						placeholder='Preço na promoção R$0,00'
						className={styles.input}
						type='number'
						name='promoPrice'
						onChange={handlePromoPrice}
						value={promoPrice}
					/>

					<input
						placeholder='Condição da promoção (Quantidade)'
						className={styles.input}
						type='number'
						name='condition'
						onChange={handleCondition}
						value={condition}
					/>
					<input
						placeholder='URL da imagem'
						className={styles.input}
						type='text'
						name='img'
						onChange={handleImage}
						value={image}
					/>
					<button
						className={styles.inputBtn}
						type='button'
						onClick={handleSubmit}
					>
						Salvar Produto
					</button>
				</form>
			</div>
		</SessionContext.Provider>
	);
}

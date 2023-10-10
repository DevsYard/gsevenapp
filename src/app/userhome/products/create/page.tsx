'use client';

import style from '../../../page.module.sass';
import styles from './page.module.sass';
import { useContext, useState } from 'react';
import requests from '../../../validations/axios.module';
import SessionContext from '../../../contexts/sessionContext';

export default function CreateProduct() {
	const [productName, setProductName] = useState<string>('');
	const [description, setDescription] = useState<string>('');
	const [price, setPrice] = useState<number>(0);
	const [promoPrice, setPromoPrice] = useState<number>(0);
	const [promo, setPromo] = useState<string>(styles.promo);
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
			setPromo(style.input);
			setTemPromo(true);
		} else {
			setPromo(styles.promo);
			setTemPromo(false);
		}
	}

	function handleSubmit(e: any) {
		e.preventDefault();
		const product = {
			productName: productName,
			description: description,
			price: price,
			promo: temPromo,
			promoPrice: promoPrice,
			condition: condition,
			img: image,
		};

		request
			.post('/products', product)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const session = useContext(SessionContext);

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.prodCreation}>
				<h1>Criação de produto</h1>
				<form
					action='submit'
					name='productCreationForm'
					className={styles.prodCreationForm}
				>
					<input
						placeholder='Nome do produto'
						className={style.input}
						type='text'
						name='productName'
						onChange={handleProductName}
					/>
					<input
						placeholder='Preço R$0,00'
						className={style.input}
						type='text'
						name='price'
						onChange={handlePrice}
					/>
					<textarea
						placeholder='Descrição'
						className={style.input}
						name='description'
						onChange={handleDescription}
					/>
					<div className={style.checkerContainer}>
						<label className={style.radio} htmlFor='promoType'>
							<input
								className={style.checkers}
								name='promoType'
								type='radio'
								value='não tem'
								onChange={handlePromo}
							/>
							Sem Promo
						</label>
						<label className={style.radio} htmlFor='promoType'>
							<input
								className={style.checkers}
								name='promoType'
								type='radio'
								value='tem promo'
								onChange={handlePromo}
							/>
							Tem Promo
						</label>
					</div>
					<input
						placeholder='Preço na promoção R$0,00'
						className={promo}
						type='text'
						name='promoPrice'
						onChange={handlePromoPrice}
					/>

					<input
						placeholder='Condição da promoção (Quantidade)'
						className={promo}
						type='number'
						name='condition'
						onChange={handleCondition}
					/>
					<input
						placeholder='URL da imagem'
						className={style.input}
						type='text'
						name='img'
						onChange={handleImage}
					/>
					<button
						className={style.inputBtn}
						type='button'
						onClick={handleSubmit}
					>
						Adicionar Produto
					</button>
				</form>
			</div>
		</SessionContext.Provider>
	);
}

'use client'

import Image from 'next/image'
import styles from './index.module.sass';
import { useContext, useEffect, useState } from 'react';
import ListaCategorias from '../ListaCategorias';
import Cart from '../Cart';
import Favorites from '../Favorites';
import User from '../User';
import SessionContext from '@/app/contexts/sessionContext';

interface Item {
	img: string;
	alt: string;
	text: string;
}

export default function Categories(props: any) {
	const [animation, setAnimation] = useState([
		styles.functionBtnOff,
		styles.functionBtnIn,
		styles.functionBtnIn,
		styles.functionBtnIn,
	]);
	const [pageAnimate, setPageAnimate] = useState(styles.cards);
	const [cards, setCards] = useState('categoria');
	const [menuPos, setMenuPos] = useState('styles.closed');
	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);

	const options: Item[] = [
		{
			img: '/categories.svg',
			alt: 'categoria',
			text: 'Categoria',
		},
		{
			img: '/cart.svg',
			alt: 'carrinho',
			text: 'Carrinho',
		},
		{
			img: '/favorites.svg',
			alt: 'favoritos',
			text: 'Favoritos',
		},
		{
			img: '/user.svg',
			alt: 'usuario',
			text: 'Usuário',
		},
	];

	const [menuMotion, setMenuMotion] = useState('styles.lista');

	const { isLogged, admin, user, token, userId, name, favorites } =
		useContext(SessionContext);

	const { isLogged, admin, user, token } = useContext(SessionContext);

	function animate(e: any) {
		let alt = e.target.alt;

		if (alt === 'categoria') {
			setAnimation([
				styles.functionBtnOff,
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnIn,
			]);

			setCards(options[0].alt);
			setMenuMotion(styles.lista);
		}
		if (alt === 'carrinho') {
			setAnimation([
				styles.functionBtnIn,
				styles.functionBtnOff,
				styles.functionBtnIn,
				styles.functionBtnIn,
			]);
			setCards(options[1].alt);
			setMenuMotion(styles.cart);
		}
		if (alt === 'favoritos') {
			setAnimation([
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnOff,
				styles.functionBtnIn,
			]);
			setCards(options[2].alt);
			setMenuMotion(styles.favorites);
		}
		if (alt === 'usuario') {
			setAnimation([
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnOff,
			]);
			setCards(options[3].alt);
			setMenuMotion(styles.user);
		}

		if (pageAnimate === styles.cards) {
			setPageAnimate(styles.cardsAnimate);
		} else {
			setPageAnimate(styles.cards);
		}
	}

	const items = [
		{
			_id: '64bf59e53a2446bf9e8bfbd1',
			productName: 'Racao canina 3',
			description:
				'A Ração GranPlus Choice Cães Adultos Frango e Carne possui uma fórmula que foi especialmente desenvolvida, sem corantes e aromatizantes artificiais, para atender aos paladares mais exigentes e ajudar a manter a saúde de seu cão.\nCom maior rendimento por quilo, a Ração Granplus para Cães possui concentração de ingredientes e nutrientes para auxiliar na manutenção da saúde e na formação de fezes firmes. Conta ainda com vitaminas e minerais que favorecem na manutenção de ossos e dentes saudáveis, além de auxiliar na manutenção da massa muscular.\nNa Cobasi você encontra a maior variedade de alimentos para seu pet como a Ração GranPlus Choice Cães Adultos Frango e Carne com preço especial. Compre pelo site, app ou em uma de nossas lojas.',
			price: 30.2,
			promo: true,
			promoPrice: 28,
			condition: 3,
			img: 'https://lh3.googleusercontent.com/pw/AIL4fc9T1LZ8cEgkc-USEMYX0GX2GNktUrRnjn464KMxc3U7gK47QTSj4rSwZBLTtl26BZP3-Xxq4Ib2zJ74dH-di6zuC3mu_ozTmV9tjLCiXu9OdH-yjma6n_ky0wwJohxqGY3uXRXjyP7PMRDKHNF65w=w506-h643-s-no?authuser=0',
			__v: 0,
		},
		{
			_id: '64bfd4998ff73156c42aad6c',
			productName: 'Petisco',
			description:
				'- Indicado para gatos;\n- Petiscos crocantes por fora e macios por dentro, para toda hora;\n- Eles são indicados para gatos adultos de todas as raças;\n- Rende mais de 20 dias (*3 pedacinhos por dia);\n- Disponível em embalagem com 40g',
			price: 6.3,
			promo: false,
			promoPrice: 0,
			condition: 0,
			img: 'https://lh3.googleusercontent.com/pw/AIL4fc9vtNtWEbbL6vd39a4eI61m3w_HeQxziAqIzjaX_xVIYqRdmYFC_tBG93h65EQlTn8eFyao8jAq6h6uAvZthI6pmizyoQsrtQaBkQRGx8sFpm8GUM3vWXF_14TftgdhPFdVwhWxYshQMkbrz4sQ8g=w643-h643-s-no?authuser=0',
			__v: 0,
		},
		{
			_id: '64bfeedf8ff73156c42aae76',
			productName: 'Desinfetante',
			description:
				'- Indicado para limpeza e desinfecção de ambientes;\n- Tem ação bactericida, germicida e fungicida;\n- Elimina bactérias como: Salmonella Choleraesuis, Staphylococus Aureus e Eschericia Coli;\n- Tem fórmula concentrada que rende mais;\n- Disponível em embalagens de 1 L e 5 L.',
			price: 270.17,
			promo: true,
			promoPrice: 250,
			condition: 2,
			img: 'https://lh3.googleusercontent.com/pw/AIL4fc-HSkyXFoChuxAoNm1KqkUTlGi3AzFiXkr-zgZBeldku_3rUDuH1Mmgpe_vhxXvVuS_aZ95-00mseKk2UhW-rD-lqW2CdXjReDgxFceuuv-jsAZQJ9EzlnLJ1fBr5CcghXKeuXotLn3ytTlx7Av3Q=w643-h643-s-no?authuser=0',
			__v: 0,
		},
		{
			_id: '650646569b727b97b2c03346',
			productName: 'Brinquedo Comedouro Pet Games Cat Ball',
			description:
				'Brinquedo Comedouro Pet Games Cat Ball\nBolinha para colocar petiscos.',
			price: 31.6,
			promo: false,
			promoPrice: 0,
			condition: 0,
			img: 'https://lh3.googleusercontent.com/pw/AIL4fc99m--Yg5PvURCxGjusBAG587b6_ZJ2ESgdS-ZsDf6YQzknCtrF2GLZ__UKavk1zK3ycvUcmaFv83fjUkgCMJhG7NUDW_EEKjxBft0nF9jhfCwXJ55rA2_tkj0E5qo--LuEdX1O2hd0QbgpUOKOMDeQ6pMmWkfijeMk4-m34cbYKGt_42Grk1kQfzWfKcAzapb93eUSbixY5LI7bNei9ztvVXPlll0UnRxExvheX51c0RHrKemFLOESA5VItrg5_lDyRbbFsEhSFVIPmRGejdK0bfuJUr2xBg04EUYpgRuU1_C__vqA8NZlXK8h7XVXpLqWsRAI_du1IcfzlImrYtxj7zf_HHT1Ej9l7buqp1DUg8gTaAcQwj_1syV7nu3nrRjSSBlEtYB7td3DHMmaHYXx6uQIfj417SSaFT468CRRfD0WPh9UlS2cMFng04KFn6vrpBR363tussS8uf7XjqEZbLB9fH5XXvi_A_ljHNlPtLGNKeW8KbMeBRCYoCUeJLdFS3nEW3kbfbz8QDqOPgCN2x8pRnFSwk5AVdaBTKbswb1YQS_4mqJZe0sXSDgFeKKKn8RZKixgk8khW4p7PRzadj6YKqBltn7R0jymJyz-z1B6om4ZgC7Xq1SrfkLJrWMdCbXlELR-1TGfNF4pRDw9wc_LcU37nlfxViWZ__rKQWs7ISwuCnRS8XPdkQwgMpDHB5Nh8kkPxt7FvZID0w14zvwFxh23xDlWhjdwLeJ_CAj1BKIWV6RDSW9iLcT7LpKga0ExsHP1g6CZyGMgbA-sTLp189e-jSy0-7UUX8xDD0iIsWboLDJwcVE-00mc7PUwWQB7mayRzxMVH7HqJHS7Y3k14-tWcVBBWjFxXsjtyT42tHMNWHu12QGB9KCez1F25MwLtYcI-uQ=w400-h400-s-no?authuser=0',
			__v: 0,
		},
	];

	function handleSearch(e: any, items: any) {
		setQuery(e.target.value);
		const results = items.filter((item: any) => {
			items['item'].productName.toLowerCase().includes(query.toLowerCase());
		});

		setSearchResults(results);

		console.log(query, results);
	}

	useEffect(() => {
		props.menu ? setMenuPos('styles.opened') : setMenuPos('styles.closed');
	}, [props.menu, menuPos]);

	return (
		<SessionContext.Provider
			value={{ isLogged, admin, user, token, userId, name, favorites }}
		>
			<div id={menuPos} className={styles.categories}>
				<nav className={styles.optionsMenu}>
					<div className={styles.selection}>
						<Image
							onClick={(e) => animate(e)}
							src={options[0].img}
							alt={options[0].alt}
							width={26}
							height={26}
							priority
						/>
						<div className={animation[0]}>{options[0].text}</div>
					</div>
					<div className={styles.selection}>
						<Image
							onClick={(e) => animate(e)}
							src={options[1].img}
							alt={options[1].alt}
							width={26}
							height={26}
							priority
						/>
						<div className={animation[1]}>{options[1].text}</div>
					</div>
					<div className={styles.selection}>
						<Image
							onClick={(e) => animate(e)}
							src={options[2].img}
							alt={options[2].alt}
							width={26}
							height={26}
							priority
						/>
						<div className={animation[2]}>{options[2].text}</div>
					</div>
					<div className={styles.selection}>
						<Image
							onClick={(e) => animate(e)}
							src={options[3].img}
							alt={options[3].alt}
							width={26}
							height={26}
							priority
						/>
						<div className={animation[3]}>{options[3].text}</div>
					</div>
				</nav>
				<div className={styles.divider}></div>
				<label className={styles.search}>
					<input
						placeholder='Buscar'
						id='search'
						className={styles.input}
						type='text'
						onChange={(e) => handleSearch(e, items)}
					/>
					<div className={styles.imgSearch}>
						<Image
							src='/lupa.svg'
							alt='Busca'
							width={26}
							height={26}
							priority
						/>
					</div>
				</label>
				<div className={styles.menuMotion}>
					<div id={menuMotion} className={styles.menu}>
						{menuMotion === styles.lista ? (
							<ListaCategorias />
						) : menuMotion === styles.cart ? (
							<Cart />
						) : menuMotion === styles.favorites && isLogged ? (
							<Favorites />
						) : menuMotion === styles.user && isLogged ? (
							<User />
						) : (
							<>
								<p>Área Logada</p>
								<p>
									<a href='/signin'>Logar</a>
								</p>
							</>
						)}
					</div>
				</div>
			</div>
		</SessionContext.Provider>
	);
}
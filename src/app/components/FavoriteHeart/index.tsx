import styles from '@/app/page.module.sass';
import SessionContext from '@/app/contexts/sessionContext';
import requests from '@/app/validations/axios.module';
import Image from 'next/image';
import { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

export default function FavoriteHeart(prop: any) {
	const [fav, setFav] = useState<string>('/favorites.svg');
	const request = requests();
	const session = useContext(SessionContext);

	function handleFav() {
		let favBool = false;

		fav === '/favorites.svg' ? (favBool = true) : (favBool = false);

		request
			.post('/favorites', {
				userId: session.userId,
				fav: favBool,
				productId: prop.produto.id,
			})
			.then((res) => {
				const produtosFavoritos = res.data.favorites.favoriteProds;
				for (let i = 0; i < produtosFavoritos.length; i++) {
					console.log(produtosFavoritos[i]);
					if (
						produtosFavoritos[i].productId === prop.produto.id &&
						fav === '/favorites.svg'
					) {
						setFav('/heart.svg');
						break;
					} else {
						setFav('/favorites.svg');
					}
				}
				console.log(res.data);
			})
			.catch((error) => alert(error.response.data));
	}

	const favs = prop.favs;

	useEffect(() => {
		console.log(favs);
		console.log(prop.produto);
		for (const produto of favs) {
			if ((prop.produto._id || prop.produto.id) === produto._id) {
				setFav('/heart.svg');
			}
		}
	}, [favs, prop.produto, fav]);

	return (
		<div onClick={() => handleFav()} className={styles.heart}>
			<Image src={fav} alt='Favoritar' width={24} height={24} priority />
		</div>
	);
}

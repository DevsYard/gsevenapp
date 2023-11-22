import styles from '@/app/page.module.sass';
import requests from '@/app/validations/axios.module';
import Image from 'next/image';
<<<<<<< HEAD
import FavoriteHeart from '../FavoriteHeart';
import { useEffect, useState, useContext } from 'react';
import SessionContext from '@/app/contexts/sessionContext';

export default function FavCard(props: any) {
	const [favs, setFavs] = useState([]);
	const session = useContext(SessionContext);

	useEffect(() => {
		const request = requests();
		request.post('/showfavorites', session).then((res) => {
			setFavs(res.data.favorites);
		});
	}, [session]);

	return (
		<SessionContext.Provider value={session}>
=======

export default function FavCard(props: any) {
	return (
		<>
>>>>>>> c05d8f639875179bb36a8e50d9f6f170fab8bcff
			<div className={styles.favCard}>
				<Image
					className={styles.itemPic}
					src={props.selectedProduct.img}
					alt={'nome de teste'}
					width={32}
					height={32}
					priority
				/>
				<p>{props.selectedProduct.productName}</p>
<<<<<<< HEAD
				<FavoriteHeart produto={props.selectedProduct} favs={favs} />
			</div>
		</SessionContext.Provider>
=======
				<h6>{props.selectedProduct.price}</h6>
			</div>
		</>
>>>>>>> c05d8f639875179bb36a8e50d9f6f170fab8bcff
	);
}

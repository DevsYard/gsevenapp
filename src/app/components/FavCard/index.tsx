import styles from '@/app/page.module.sass';
import requests from '@/app/validations/axios.module';
import Image from 'next/image';

export default function FavCard(props: any) {
	return (
		<>
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
				<h6>{props.selectedProduct.price}</h6>
			</div>
		</>
	);
}

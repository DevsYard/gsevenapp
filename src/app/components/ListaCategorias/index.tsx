import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'

export default function ListaCategorias() {
	return (
		<div className={styles.catList}>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Cães</summary>
				<ul className={styles.ul}>
					<li><a href='/dog_food'>{'ração'}</a></li>
					<li><a href='/toys'>{'brinquedo'}</a></li>
					<li><a href='/bath'>{'banho & tosa'}</a></li>
					<li><a href='/cleaning'>{'limpeza'}</a></li>
					<li><a href='/pharmacy'>{'farmácia'}</a></li>
					<li><a href='/abode'>{'estadia'}</a></li>
					<li><a href='/healthcare'>{'cuidados'}</a></li>
					<li><a href='/snacks'>{'snacks'}</a></li>
				</ul>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Gatos</summary>
				<ul className={styles.ul}>
					<li><a href='/cat_food'>{'ração'}</a></li>
					<li><a href='#'>{'brinquedo'}</a></li>
					<li><a href='#'>{'banho & tosa'}</a></li>
					<li><a href='#'>{'limpeza'}</a></li>
					<li><a href='#'>{'farmácia'}</a></li>
					<li><a href='#'>{'estadia'}</a></li>
					<li><a href='#'>{'cuidados'}</a></li>
					<li><a href='#'>{'snacks'}</a></li>
				</ul>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Peixes</summary><a href='#'>teste</a></details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Exóticos</summary><a href='#'>teste</a></details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Rações</summary><a href='#'>teste</a></details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Farmácia</summary><a href='#'>teste</a></details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Banho & Tosa</summary><a href='#'>teste</a></details>
		</div>
	);
}

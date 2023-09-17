import Image from 'next/image'
import styles from './index.module.sass';
import Link from 'next/link'

export default function ListaCategorias() {
	return (
		<div className={styles.catList}>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>
					<ul>
						<li>
							<Link href='/userhome'>Tudo</Link>
						</li>
					</ul>
				</summary>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Cães</summary>
				<ul className={styles.ul}>
					<li>
						<Link href='/dog_food'>{'ração'}</Link>
					</li>
					<li>
						<Link href='/toys'>{'brinquedo'}</Link>
					</li>
					<li>
						<Link href='/bath'>{'banho & tosa'}</Link>
					</li>
					<li>
						<Link href='/cleaning'>{'limpeza'}</Link>
					</li>
					<li>
						<Link href='/pharmacy'>{'farmácia'}</Link>
					</li>
					<li>
						<Link href='/abode'>{'estadia'}</Link>
					</li>
					<li>
						<Link href='/healthcare'>{'cuidados'}</Link>
					</li>
					<li>
						<Link href='/snacks'>{'snacks'}</Link>
					</li>
				</ul>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Gatos</summary>
				<ul className={styles.ul}>
					<li>
						<Link href='/cat_food'>{'ração'}</Link>
					</li>
					<li>
						<Link href='#'>{'brinquedo'}</Link>
					</li>
					<li>
						<Link href='#'>{'banho & tosa'}</Link>
					</li>
					<li>
						<Link href='#'>{'limpeza'}</Link>
					</li>
					<li>
						<Link href='#'>{'farmácia'}</Link>
					</li>
					<li>
						<Link href='#'>{'estadia'}</Link>
					</li>
					<li>
						<Link href='#'>{'cuidados'}</Link>
					</li>
					<li>
						<Link href='#'>{'snacks'}</Link>
					</li>
				</ul>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Peixes</summary>
				<Link href='#'>teste</Link>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Exóticos</summary>
				<Link href='#'>teste</Link>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Rações</summary>
				<Link href='#'>teste</Link>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Farmácia</summary>
				<Link href='#'>teste</Link>
			</details>
			<details className={styles.listCategories}>
				<summary className={styles.summary}>Banho & Tosa</summary>
				<Link href='#'>teste</Link>
			</details>
		</div>
	);
}

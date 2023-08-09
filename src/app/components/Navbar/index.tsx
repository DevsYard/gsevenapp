import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'


export default function Navbar() {
  return (
		<nav className={styles.nav}>
			<div className={styles.profile}>
				<div className={styles.picture}>
					<Image
						src='/profilepic.jpg'
						alt='Foto de perfil'
						width={73}
						height={73}
						priority
					/>
				</div>
				<div className={styles.online}></div>
				<div className={styles.welcome}>
					<p>Olá, Fulana</p>
					<p>No que podemos ajudar?</p>
				</div>
			</div>
			<Image
				className={styles.logo}
				src='/Logo.svg'
				alt='Foto de perfil'
				width={73}
				height={73}
				priority
			/>
			<div className={styles.activeHamb}>
				<Image
					className={styles.hamburguer}
					src='/hamburguer.svg'
					alt='Menu hamburguer'
					width={32}
					height={32}
					priority
				/>
			</div>
		</nav>
	);
}
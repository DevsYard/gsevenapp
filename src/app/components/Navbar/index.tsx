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
				<div>
					<p>Olá, Fulana</p>
					<p>No que podemos ajudar?</p>
				</div>
			</div>
			<Image
				src='/Logo.svg'
				alt='Foto de perfil'
				width={73}
				height={73}
				priority
			/>
		</nav>
	);
}
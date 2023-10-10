'use client'

import Image from 'next/image'
import styles from '../../page.module.sass'
import { useContext, useState } from 'react';

export default function Navbar(props: any) {
	const [arrow, setArrow] = useState('./arrowRight.svg');
	const [menuOpen, setMenuOpen] = useState(false);
	const [arrowStyle, setArrowStyle] = useState('styles.arrow');

	function handleMenu() {
		!menuOpen ? setMenuOpen(true) : setMenuOpen(false);
		menuOpen ? setArrow('./arrowLeft.svg') : setArrow('./arrowRight.svg');
		menuOpen
			? setArrowStyle('styles.arrowOpen')
			: setArrowStyle('styles.arrow');

		props.menuInfo(menuOpen);
	}

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
					<p>Olá, {props.nome === '' ? props.user : props.nome}</p>
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
			<div className={styles.activeArrow}>
				<Image
					className={arrowStyle}
					src={arrow}
					alt='Abrir/Fechar Menu'
					width={32}
					height={32}
					priority
					onClick={handleMenu}
				/>
			</div>
		</nav>
	);
}
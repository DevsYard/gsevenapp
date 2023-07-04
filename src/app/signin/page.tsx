'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link'
import { useState } from 'react'

export default function SignIn() {

	const [mostraSenha, setMostraSenha] = useState<string>('password')
	
	function handleLogin() {
		
	}

	function handleMostrarSenha(e: any) {
		e.target.checked ? setMostraSenha('text') : setMostraSenha('password')
	}

  return (
		<main className={styles.mainLogin}>
			<aside className={styles.aside}>
				<Image
					src='/Logo.svg'
					alt='Logo'
					className={styles.vercelLogo}
					width={200}
					height={100}
					priority
				/>
			</aside>
			<form action='submit' className={styles.rightScreen}>
				<input
					placeholder='Nome de usuário'
					className={styles.input}
					type='text'
				/>
				<input 
					placeholder='Senha' 
					className={styles.input} 
					type={mostraSenha} 
				/>
				<label className={styles.checkLabel}>
					Mostrar senha
					<input
						className={styles.checkbox}
						type='checkbox'
						onChange={(event) => handleMostrarSenha(event)}
					/>
				</label>
				<button className={styles.inputBtn} onClick={() => handleLogin} type='button'>
					Logar
				</button>
				<button className={styles.inputGoogle} type='button'>
					<Image
						src='/google.png'
						alt='Logo Google'
						width={24}
						height={24}
						priority
					/>
					Logar com Google
				</button>
				<button className={styles.inputFacebook} type='button'>
					<Image
						src='/facebook.png'
						alt='Logo Google'
						width={24}
						height={24}
						priority
					/>
					Logar com Facebook
				</button>
				<p>
					<Link className={styles.link} href='/signup'>
						Ou crie seu cadastro
					</Link>
				</p>
			</form>
		</main>
	)
}
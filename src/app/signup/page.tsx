'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link';
import { HTMLInputTypeAttribute, useState } from 'react';

export default function SignIn() {

	const [mostraSenha, setMostraSenha] = useState<HTMLInputTypeAttribute>('password')

	function handleMostrarSenha(e: any) {
		e.target.checked ? setMostraSenha('text') : setMostraSenha('password');
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
				<input
					placeholder='Repetir senha'
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

				<div className={styles.checkerContainer}>
					<label className={styles.radio} htmlFor='userType'>
						<input
							id='userType'
							className={styles.checkers}
							name='userType'
							type='radio'
						/>
						Usuário
					</label>
					<label className={styles.radio} htmlFor='userType'>
						<input className={styles.checkers} name='userType' type='radio' />
						Admin
					</label>
				</div>

				<button className={styles.inputBtn} type='button'>
					Criar conta
				</button>

				<p>
					<Link className={styles.link} href='/signin'>
						Vá para o login
					</Link>
				</p>
			</form>
		</main>
	);
}
'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link';
import { HTMLInputTypeAttribute, useState } from 'react';
import requests from '../validations/axios.module';
import { redirect } from 'next/navigation';

export default function SignIn() {
	const [mostraSenha, setMostraSenha] =
		useState<HTMLInputTypeAttribute>('password');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [repeatPassword, setRepeatPassword] = useState<string>('');
	const [admin, setAdmin] = useState<boolean>(false);
	// const [csrfToken, setCsrfToken] = useState<string>('')
	const request = requests();

	function handleMostrarSenha(e: any) {
		e.target.checked ? setMostraSenha('text') : setMostraSenha('password');
	}

	function handleAdmin(e: any) {
		e.target.value === 'user'
			? setAdmin(false)
			: e.target.value === 'admin'
			? setAdmin(true)
			: alert('Escolha o tipo de conta');
		console.log('É admin?', e.target.value);
	}

	function handleUsername(e: any) {
		setUsername(e.target.value);
	}
	function handlePassword(e: any) {
		setPassword(e.target.value);
	}
	function handleRepeatPassword(e: any) {
		setRepeatPassword(e.target.value);
	}

	function handleSubmit(e: any) {
		if (password !== repeatPassword) {
			alert('As senhas precisam ser iguais');
			return;
		}

		if (password.length < 8) {
			alert('As senhas precisam ter pelo menos 8 caracteres');
			return;
		}

		const data = {
			username: username,
			password: password,
			admin: admin,
		};

		request
			.post('/signup', data)
			.then((res) => {
				if (res.status === 201) {
					redirect('/signin');
				}
			})
			.catch((error) => {
				console.log(error);
			});
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
					onChange={(e) => handleUsername(e)}
				/>
				<input
					placeholder='Senha'
					className={styles.input}
					type={mostraSenha}
					onChange={(e) => handlePassword(e)}
				/>
				<input
					placeholder='Repetir senha'
					className={styles.input}
					type={mostraSenha}
					onChange={(e) => handleRepeatPassword(e)}
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
							value='user'
							onChange={(e) => handleAdmin(e)}
						/>
						Usuário
					</label>
					<label className={styles.radio} htmlFor='userType'>
						<input
							className={styles.checkers}
							name='userType'
							type='radio'
							value='admin'
							onChange={(e) => handleAdmin(e)}
						/>
						Admin
					</label>
				</div>

				<button
					className={styles.inputBtn}
					type='submit'
					onClick={(e) => handleSubmit(e)}
				>
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
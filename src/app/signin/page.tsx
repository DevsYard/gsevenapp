'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import requests from '../validations/axios.module';
import { redirect } from 'next/navigation';

export default function SignIn() {
	const [mostraSenha, setMostraSenha] = useState<string>('password');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [auth, setAuth] = useState(false);

	// const [csrfToken, setCsrfToken] = useState<string>('')

	function handleLogin(e: any) {
		const request = requests();

		if (password.length < 8) {
			alert('A Senha precisa ter pelo menos 8 dígitos');
			return;
		}

		const data = {
			username: username,
			password: password,
		};

		request
			.post('/signin', data)
			.then((res) => {
				res.data ? setAuth(true) : setAuth(false);
			})
			.catch((error) => {
				console.log(error);
				return;
			});
	}

	function handleUsername(e: any) {
		setUsername(e.target.value);
	}
	function handlePassword(e: any) {
		setPassword(e.target.value);
	}

	function handleMostrarSenha(e: any) {
		e.target.checked ? setMostraSenha('text') : setMostraSenha('password');
	}

	useEffect(() => {
		function authenticate() {
			if (auth) {
				redirect('/userhome');
			}
			return;
		}
		authenticate();
	}, [auth]);

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
				{/* <input type='hidden' name='_csrf' value={csrfToken} /> */}
				<input
					placeholder='Nome de usuário'
					className={styles.input}
					type='text'
					name='username'
					onChange={handleUsername}
					autoComplete={username}
				/>
				<input
					placeholder='Senha'
					className={styles.input}
					type={mostraSenha}
					name='password'
					onChange={handlePassword}
					autoComplete={password}
				/>
				<label className={styles.checkLabel}>
					Mostrar senha
					<input
						className={styles.checkbox}
						type='checkbox'
						onChange={(event) => handleMostrarSenha(event)}
					/>
				</label>
				<button
					className={styles.inputBtn}
					onClick={(e) => handleLogin(e)}
					type='button'
				>
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
	);
}
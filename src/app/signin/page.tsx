'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SignIn() {
	const [mostraSenha, setMostraSenha] = useState<string>('password');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	// const [csrfToken, setCsrfToken] = useState<string>('');

	const requests = axios.create({
		baseURL: 'http://localhost:3001',
		timeout: 1000,
	});

	function handleLogin(e: any) {
		e.preventDefault();

		if (password.length < 8) {
			alert('A Senha precisa ter pelo menos 8 dígitos');
			return;
		}

		const data = {
			username: username,
			password: password,
		};

		requests
			.get('/signin')
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
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
		const requests = axios.create({
			baseURL: 'https://localhost:3001',
			timeout: 1000,
		});

		requests
			.get('/signin')
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});

		// async function fetchCsrfToken() {
		// 	try {
		// 		const response = await requests.get('/signin' || '/')
		// 		const token = response.data.local.csrfToken
		// 		setCsrfToken(token)
		// 	} catch(err) {
		// 		console.error("Error fetching csrf token", err)
		// 	}
		// }

		// fetchCsrfToken()
	}, []);

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
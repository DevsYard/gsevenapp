'use client'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Snackbar from '@mui/material/Snackbar';
import Image from 'next/image';
import styles from '../page.module.sass';
import Link from 'next/link';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import requests from '../validations/axios.module';
import { redirect } from 'next/navigation';
import SessionContext from '../contexts/sessionContext';
import useUserType from '../hooks/useUserType';

interface Data {
	username: string;
	password: string;
}

export default function SignIn() {
	const [mostraSenha, setMostraSenha] = useState('password');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [auth, setAuth] = useState(false);

	const session = useContext(SessionContext);

	function handleLogin() {
		const request = requests();

		if (password.length < 8) {
			alert('A Senha precisa ter pelo menos 8 dígitos');
			return;
		}

		const data: Data = {
			username: username,
			password: password,
		};

		request
			.post('/signin', data)
			.then((res) => {
				if (res.data) {
					setAuth(res.data.auth);
					session.admin = res.data.admin;
					session.isLogged = res.data.auth;
					session.user = username;
					session.token = res.data.token;
					redirect('/userhome');
				}
			})
			.catch((error: any) => {
				const msg = error.response.data.message;
				alert(msg);
			});
		return;
	}

	function handleUsername(e: ChangeEvent<HTMLInputElement>) {
		setUsername(e.target.value);
	}
	function handlePassword(e: ChangeEvent<HTMLInputElement>) {
		setPassword(e.target.value);
	}

	function handleMostrarSenha(e: ChangeEvent<HTMLInputElement>) {
		e.target.checked ? setMostraSenha('text') : setMostraSenha('password');
		console.log(e);
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
		<SessionContext.Provider value={session}>
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
						autoComplete='username'
						className={styles.input}
						type='text'
						name='username'
						onChange={handleUsername}
					/>
					<input
						placeholder='Senha'
						autoComplete='current-password'
						className={styles.input}
						type={mostraSenha}
						name='password'
						onChange={handlePassword}
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
						onClick={handleLogin}
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
		</SessionContext.Provider>
	);
}
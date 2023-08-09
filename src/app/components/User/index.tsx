import Image from 'next/image';
import styles from '../../page.module.sass';
import Link from 'next/link';
import requests from '../../validations/axios.module';
import { useState } from 'react';

export default function User() {
	const request = requests();

	const [users, setUsers] = useState({});

	request.get('/users');

	return (
		<div className={styles.user}>
			<h3>Usuário</h3>
			<Admin />
		</div>
	);
}

function Admin() {
	return (
		<div className={styles.userSettings}>
			<li>
				<a href='/profile'>Perfil</a>
			</li>
			<li>
				<a href='/products/create'>Adicionar Produto</a>
			</li>
			<li>
				<a href='/products/edit'>Editar Produto</a>
			</li>
			<li>
				<a href='/products/delete'>Apagar Produto</a>
			</li>
			<li>
				<a href='/settings'>Gerenciar</a>
			</li>
			<li>
				<a href='/signin'>Sair</a>
			</li>
		</div>
	);
}

function Customer() {
	return (
		<div className={styles.userSettings}>
			<li>
				<a href='/profile'>Perfil</a>
			</li>
			<li>
				<a href='/settings'>Gerenciar</a>
			</li>
			<li>
				<a href='/signin'>Sair</a>
			</li>
		</div>
	);
}

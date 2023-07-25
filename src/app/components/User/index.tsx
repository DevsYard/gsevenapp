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
			<ul>
				<li>
					<a href='/products/create'>Adicionar Produto</a>
				</li>
			</ul>
		</div>
	);
}

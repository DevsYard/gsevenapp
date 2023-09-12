'use client';

import { useContext } from 'react';
import styles from '../../page.module.sass';
import Link from 'next/link';
import SessionContext from '../../contexts/sessionContext';
import useUserType from '@/app/hooks/useUserType';

export default function User() {
	const session = useContext(SessionContext);
	const { userType } = useUserType();

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.user}>
				<h3>Usuário</h3>
				{session.admin && session.isLogged ? (
					<Admin />
				) : session.user && session.isLogged ? (
					<Customer />
				) : (
					<>Área Logada</>
				)}
			</div>
		</SessionContext.Provider>
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

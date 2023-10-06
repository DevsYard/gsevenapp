'use client';

import { useContext, useState } from 'react';
import styles from '../../page.module.sass';
import Link from 'next/link';
import SessionContext from '../../contexts/sessionContext';
import useUserType from '@/app/hooks/useUserType';

export default function User(props: any) {
	const session = useContext(SessionContext);
	const { userType } = useUserType();

	return (
		<SessionContext.Provider value={session}>
			<div className={styles.user}>
				<h3>Usuário</h3>
				{session.admin ? (
					<Admin />
				) : !session.admin ? (
					<Customer />
				) : (
					<>
						<p>Área Logada</p>
						<Link href='/signin'>Fazer Login</Link>
					</>
				)}
			</div>
		</SessionContext.Provider>
	);
}

function Admin() {
	return (
		<div className={styles.userSettings}>
			<li>
				<Link href='/userhome/profile'>Perfil</Link>
			</li>
			<li>
				<Link href='/userhome/products/create'>Adicionar Produto</Link>
			</li>
			<li>
				<Link href='/userhome/products/edit'>Editar Produto</Link>
			</li>
			<li>
				<Link href='/userhome/products/delete'>Apagar Produto</Link>
			</li>
			<li>
				<Link href='/userhome/settings'>Gerenciar</Link>
			</li>
			<li>
				<Link href='/signin'>Sair</Link>
			</li>
		</div>
	);
}

function Customer() {
	return (
		<div className={styles.userSettings}>
			<li>
				<Link href='/userhome/profile'>Perfil</Link>
			</li>
			<li>
				<Link href='/userhome/settings'>Gerenciar</Link>
			</li>
			<li>
				<Link href='/signin'>Sair</Link>
			</li>
		</div>
	);
}

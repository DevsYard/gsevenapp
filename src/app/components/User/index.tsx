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
	const [showProfile, setShowProfile] = useState(false);
	const [showCreateProduct, setShowCreateProduct] = useState(false);
	const [showEditProduct, setShowEditProduct] = useState(false);
	const [showDeleteProduct, setShowDeleteProduct] = useState(false);
	const [showSettings, setSSettings] = useState(false);

	function handleProfile() {
		setShowProfile(true);
		setShowCreateProduct(false);
		setShowEditProduct(false);
		setShowDeleteProduct(false);
		setSSettings(false);
	}

	function handleCreateProduct() {
		setShowProfile(false);
		setShowCreateProduct(true);
		setShowEditProduct(false);
		setShowDeleteProduct(false);
		setSSettings(false);
	}

	function handleEditProduct() {
		setShowProfile(false);
		setShowCreateProduct(false);
		setShowEditProduct(true);
		setShowDeleteProduct(false);
		setSSettings(false);
	}

	function handleDeleteProduct() {
		setShowProfile(false);
		setShowCreateProduct(false);
		setShowEditProduct(false);
		setShowDeleteProduct(true);
		setSSettings(false);
	}

	function handleSettings() {
		setShowProfile(false);
		setShowCreateProduct(false);
		setShowEditProduct(false);
		setShowDeleteProduct(false);
		setSSettings(true);
	}

	return (
		<div className={styles.userSettings}>
			<li>
				<Link onClick={handleProfile} href='/userhome/profile'>
					Perfil
				</Link>
			</li>
			<li>
				<Link onClick={handleCreateProduct} href='/userhome/products/create'>
					Adicionar Produto
				</Link>
			</li>
			<li>
				<Link onClick={handleEditProduct} href='/userhome/products/edit'>
					Editar Produto
				</Link>
			</li>
			<li>
				<Link onClick={handleDeleteProduct} href='/userhome/products/delete'>
					Apagar Produto
				</Link>
			</li>
			<li>
				<Link onClick={handleSettings} href='/userhome/settings'>
					Gerenciar
				</Link>
			</li>
			<li>
				<Link href='/signin'>Sair</Link>
			</li>
		</div>
	);
}

function Customer() {
	const [showProfile, setShowProfile] = useState(false);
	const [showSettings, setSSettings] = useState(false);

	function handleProfile() {
		setShowProfile(true);
		setSSettings(false);
	}

	function handleSettings() {
		setShowProfile(false);
		setSSettings(true);
	}

	return (
		<div className={styles.userSettings}>
			<li>
				<Link onClick={handleProfile} href='/profile'>
					Perfil
				</Link>
			</li>
			<li>
				<Link onClick={handleSettings} href='/settings'>
					Gerenciar
				</Link>
			</li>
			<li>
				<Link href='/signin'>Sair</Link>
			</li>
		</div>
	);
}

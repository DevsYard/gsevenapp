'use client';

import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import styles from '../../page.module.sass';
import SessionContext from '../../../contexts/sessionContext';
import { useContext, useState } from 'react';

export default function Produto() {
	const session = useContext(SessionContext);

	const [data, setData] = useState(false);

	const menuData = (newData: boolean) => {
		setData(newData);
		return data;
	};

	return (
		<SessionContext.Provider value={session}>
			<Navbar
				user={session.user}
				nome={session.name}
				avatar={session.avatar}
				menuInfo={menuData}
			/>
			<h1>Cadastro de Produtos</h1>
		</SessionContext.Provider>
	);
}

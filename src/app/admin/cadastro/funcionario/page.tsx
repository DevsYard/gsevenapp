'use client';

import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import styles from '../../page.module.sass';
import SessionContext from '../../../contexts/sessionContext';
import { useContext, useState } from 'react';

export default function Funcionarios() {
	const session = useContext(SessionContext);
	const [data, setData] = useState(false);

	const menuData = (newData: boolean) => {
		setData(newData);
		return data;
	};


	return (
		<SessionContext.Provider value={session}>
			<Navbar
				nome={session.name}
				user={session.user}
				avatar={session.avatar}
				menuInfo={menuData}
			/>
			<h1>Cadastro de funcionario</h1>
		</SessionContext.Provider>
	);
}

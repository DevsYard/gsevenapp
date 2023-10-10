'use client';

import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import styles from '../../page.module.sass';
import SessionContext from '../../../contexts/sessionContext';
import { useContext, useState } from 'react';

export default function Funcionarios() {
	const session = useContext(SessionContext);

	return (
		<SessionContext.Provider value={session}>
			<Navbar nome={session.name} user={session.user} />
			<h1>Cadastro de funcionario</h1>
		</SessionContext.Provider>
	);
}

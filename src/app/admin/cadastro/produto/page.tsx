import Navbar from "@/app/components/Navbar"
import Image from 'next/image'
import styles from '../../page.module.sass'
import SessionContext from '../../../contexts/sessionContext';
import { useContext } from 'react';

export default function Produto() {
	const session = useContext(SessionContext);

	return (
		<SessionContext.Provider value={session}>
			<Navbar user={session.user} nome={session.name} />
			<h1>Cadastro de Produtos</h1>
		</SessionContext.Provider>
	);
}
import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import styles from '../../page.module.sass'
import SessionContext from '../../../contexts/sessionContext';
import { useContext } from 'react';

export default function Funcionarios() {
	const { isLogged, user, admin, token } = useContext(SessionContext);

	return (
		<SessionContext.Provider value={{ isLogged, user, admin, token }}>
			<Navbar user={user} />
			<h1>Cadastro de funcionario</h1>
		</SessionContext.Provider>
	);
}

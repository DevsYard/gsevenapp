'use client'

import styles from '../page.module.sass';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Main from '../components/Main';
import SessionContext from '../contexts/SessionContext';
import { useContext } from 'react';

export default function UserHome() {

	const {isLogged, user} = useContext(SessionContext)

	return (
		<SessionContext.Provider value={{ isLogged, user }}>
			<div id={styles.basePage}>
				<Navbar user={user} />
				<div id={styles.content}>
					<Categories />
					<Main />
				</div>
			</div>
		</SessionContext.Provider>
	);
}

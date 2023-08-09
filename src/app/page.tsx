'use client';

import styles from './page.module.sass';
import SignIn from './signin/page';
import { useEffect, useState } from 'react';
import IsLogged from './contexts/sessionContext';
import UserHome from './userhome/page';

export default function Home() {
	const [auth, setAuth] = useState(false);

	useEffect(() => {
		IsLogged ? setAuth(true) : setAuth(false);
	}, [auth]);

	return (
		<IsLogged.Provider value={{ auth, setAuth }}>
			<main className={styles.main}>
				<SignIn />
			</main>
		</IsLogged.Provider>
	);
}

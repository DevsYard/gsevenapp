'use client';

import styles from './page.module.sass';
import SignIn from './signin/page';
import { useState } from 'react';
import IsLogged from './contexts/sessionContext';

export default function Home() {
	const [auth, setAuth] = useState(false);
	return (
		<IsLogged.Provider value={{ auth, setAuth }}>
			<main className={styles.main}>
				<SignIn />
			</main>
		</IsLogged.Provider>
	);
}

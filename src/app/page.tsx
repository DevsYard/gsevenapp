'use client';

import styles from './page.module.sass';
import SignIn from './signin/page';
import { useContext, useEffect, useState } from 'react';
import UserHome from './userhome/page';
import SessionContext from './contexts/sessionContext';

export default function Home() {
	const session = useContext(SessionContext);

	return (
		<SessionContext.Provider value={session}>
			<main className={styles.main}>
				<SignIn />
			</main>
		</SessionContext.Provider>
	);
}

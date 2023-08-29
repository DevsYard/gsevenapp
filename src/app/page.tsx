'use client';

import styles from './page.module.sass';
import SignIn from './signin/page';
import { useEffect, useState } from 'react';
import UserHome from './userhome/page';

export default function Home() {
	
	return (
		<main className={styles.main}>
			<SignIn />
		</main>
	);
}

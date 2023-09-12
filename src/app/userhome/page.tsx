'use client'

import styles from '../page.module.sass';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import SessionContext from '@/app/contexts/sessionContext';
import { useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Principal from '../components/Principal';
import Favorites from '../components/Favorites';
import CreateProduct from '../products/create/page';

interface isLoggedIn {
	isLogged: boolean;
	user: string;
	admin: boolean;
	token: string;
}

export default function UserHome() {
	const session = useContext(SessionContext);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const renderMainContent = (session: isLoggedIn) => {
		const url = `${pathname}?${searchParams}`;

		if (url === '/userhome') {
			return <Principal {...session} />;
		} else if (url === '/favorites') {
			return <Favorites />;
		} else if (url === '/products/create') {
			return <CreateProduct />;
		} else {
			return <Principal {...session} />;
		}
	};

	return (
		<SessionContext.Provider value={session}>
			<div id={styles.basePage}>
				<Navbar user={session.user} />
				<div id={styles.content}>
					<Categories />
					<main className={styles.mainPage}>{renderMainContent(session)}</main>
				</div>
			</div>
		</SessionContext.Provider>
	);
}

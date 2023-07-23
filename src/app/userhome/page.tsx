'use client'

import styles from '../page.module.sass';
import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Main from '../components/Main';

export default function UserHome() {
	return (
		<div id={styles.basePage}>
			<Navbar />
			<div id={styles.content}>
				<Categories />
				<Main />
			</div>
		</div>
	);
}
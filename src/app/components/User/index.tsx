import Image from 'next/image';
import styles from '../../page.module.sass';
import Link from 'next/link';

export default function User() {
	return (
		<div className={styles.user}>
			<h1>Usuário</h1>
		</div>
	);
}

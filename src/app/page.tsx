import Image from 'next/image'
import styles from './page.module.sass'
import UserHome from './userhome/page';

export default function Home() {
  return (
		<main className={styles.main}>
			<UserHome />
		</main>
	);
}

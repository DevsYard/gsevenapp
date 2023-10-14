import styles from './page.module.sass';
import SignIn from './signin/page';
import Cookies from './validations/cookies.module';
import { redirect } from 'next/navigation';

export default function Home() {
	const cookie = Cookies();

	console.log('Cookie: ', cookie);

	return (
		<main className={styles.main}>
			{cookie ? redirect('/userhome') : <SignIn />}
		</main>
	);
}

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link';

export default function SignIn() {
  return (
		<main className={styles.main}>
			<aside className={styles.aside}>
				<Image
					src='/Logo.svg'
					alt='Logo'
					className={styles.vercelLogo}
					width={200}
					height={100}
					priority
				/>
			</aside>
			<form action='submit' className={styles.rightScreen}>
				<input
					placeholder='Nome de usuário'
					className={styles.input}
					type='text'
				/>
				<input placeholder='Senha' className={styles.input} type='text' />
				<input
					placeholder='Repetir senha'
					className={styles.input}
					type='text'
				/>
				<div className={styles.checkerContainer}>
					<label className={styles.radio} htmlFor='userType'><input name='userType' type='radio' /> Usuário</label>
					<label className={styles.radio} htmlFor='userType'><input name='userType' type='radio' /> Admin</label>
				</div>
				
				<button className={styles.inputBtn} type='button'>
					Criar conta
				</button>

				<p>
					<Link className={styles.link} href='/signin'>
						Vá para o login
					</Link>
				</p>
			</form>
		</main>
	);
}
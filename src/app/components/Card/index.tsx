import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'

export default function Card() {
  return (
		<div className={styles.card}>
			<Image
        className={styles.itemPic}
				src={'/racao.png'}
				alt='ração 1'
				width={155}
				height={155}
				priority
			/>
			<div className={styles.boxTexto}>
				<h3>Nome do produto</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
					nostrum in odit error eius voluptate inventore. Sit odio odit
					consequatur eos doloribus, minima recusandae, vitae, ipsam voluptatem
					adipisci tempora inventore?
				</p>
			</div>
      <div className={styles.buyContainer}>
        <button className={styles.btnCompra}>Adicionar</button>
        <h2>R$30,90</h2>
      </div>
		</div>
	);
}
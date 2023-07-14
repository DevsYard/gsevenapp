'use client'

import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import { useEffect, useState } from 'react'


// interface MouseEvent {
// 	target: HTMLElement
// 	clientX: number
// 	clientY: number
// 	preventDefault(): void
// }

export default function Card() {

	const [quantidade, setQuantidade] = useState(0)
	const [price, setPrice] = useState(0)
	const [unidade, setUnidade] = useState(30.9)

	function handleQuantidade(e: any) {
		if (e.target.innerHTML === '+') {
			setQuantidade(quantidade + 1)
		} else {
			if (quantidade !== 0) {
				setQuantidade(quantidade - 1)
			}
		}
	}

	useEffect(() => {
			setPrice(unidade * quantidade)	
	}, [quantidade, unidade])


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
				<div className={styles.btnContainer}>
					<button
						className={styles.btnCompra}
						onClick={(e) => handleQuantidade(e)}
					>
						-
					</button>
					<div className={styles.quantidade}>{quantidade}</div>
					<button
						className={styles.btnCompra}
						onClick={(e) => handleQuantidade(e)}
					>
						+
					</button>
				</div>
				<h2>R${price.toFixed(2)}</h2>
				<h3>R${unidade.toFixed(2)}</h3>
			</div>
		</div>
	)
}
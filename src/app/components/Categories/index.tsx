'use client'

import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import { useState } from 'react'
import ListaCategorias from '../ListaCategorias'


interface Item {
	img: string
	alt: string
	text: string
}

export default function Categories() {

  const [animation, setAnimation] = useState([
    styles.functionBtnOff,
    styles.functionBtnIn,
    styles.functionBtnIn,
    styles.functionBtnIn
  ])  
  const [pageAnimate, setPageAnimate] = useState(styles.cards)
  const [cards, setCards] = useState('categoria')

  const options: Item[] = [
    {
      img: '/categories.svg',
      alt: 'categoria',
      text: 'Categoria'
    },
    {
      img: '/chart.svg',
      alt: 'carrinho',
      text: 'Carrinho'
    },
    {
      img: '/favorites.svg',
      alt: 'favoritos',
      text: 'Favoritos'
    },
    {
      img: '/user.svg',
      alt: 'usuario',
      text: 'Usuário'
    },
  ]


  function animate(e: any) {
    let alt = e.target.alt
    console.log(e.target)

    if(alt === 'categoria') {
      setAnimation([
				styles.functionBtnOff,
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnIn,
			])
      setCards(options[0].alt)
    }
    if(alt === 'carrinho') {
      setAnimation([
        styles.functionBtnIn,
				styles.functionBtnOff,
				styles.functionBtnIn,
				styles.functionBtnIn,
			])
      setCards(options[1].alt)
    }
    if(alt === 'favoritos') {
      setAnimation([
        styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnOff,
				styles.functionBtnIn,
			])
      setCards(options[2].alt)
    }
    if(alt === 'usuario') {
      setAnimation([
        styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnIn,
				styles.functionBtnOff,
			])
      setCards(options[3].alt)
    }

    if (pageAnimate === styles.cards) {
			setPageAnimate(styles.cardsAnimate)
		} else {
			setPageAnimate(styles.cards)
		}
  }

  return (
		<div className={styles.categories}>
			<nav className={styles.optionsMenu}>
				<div className={styles.selection}>
					<Image
						onClick={(e) => animate(e)}
						src={options[0].img}
						alt={options[0].alt}
						width={26}
						height={26}
						priority
					/>
					<div className={animation[0]}>{options[0].text}</div>
				</div>
				<div className={styles.selection}>
					<Image
						onClick={(e) => animate(e)}
						src={options[1].img}
						alt={options[1].alt}
						width={26}
						height={26}
						priority
					/>
					<div className={animation[1]}>{options[1].text}</div>
				</div>
				<div className={styles.selection}>
					<Image
						onClick={(e) => animate(e)}
						src={options[2].img}
						alt={options[2].alt}
						width={26}
						height={26}
						priority
					/>
					<div className={animation[2]}>{options[2].text}</div>
				</div>
				<div className={styles.selection}>
					<Image
						onClick={(e) => animate(e)}
						src={options[3].img}
						alt={options[3].alt}
						width={26}
						height={26}
						priority
					/>
					<div className={animation[3]}>{options[3].text}</div>
				</div>
			</nav>
			<div className={styles.divider}></div>
			<label className={styles.search}>
				<input
					placeholder='Buscar'
					id='search'
					className={styles.input}
					type='text'
				/>
				<div className={styles.imgSearch}>
					<Image src='/lupa.svg' alt='Busca' width={26} height={26} />
				</div>
			</label>

			<ListaCategorias />
		</div>
	);
}
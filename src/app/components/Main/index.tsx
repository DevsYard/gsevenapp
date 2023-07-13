import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link'
import Card from '../Card/index'


export default function Main() {
  return (
    <main className={styles.mainPage}>
      <header className={styles.cardsHeader}>
        <h2>Melhores ofertas</h2>
        <h5>Ordenar</h5>
      </header>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}
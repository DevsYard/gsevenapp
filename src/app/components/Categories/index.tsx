import Image from 'next/image'
import styles from '../../page.module.sass'
import Link from 'next/link';

export default function Categories() {
  return(
    <div className={styles.categories}>
      <nav className={styles.optionsMenu}>
        <div className={styles.selection}>
          <Image 
            src='/categories.svg'
            alt='Categoria'
            width={26}
            height={26}
            priority
          />
          <p>Categoria</p>
        </div>
        <div className={styles.selection}>
          <Image 
            src='/chart.svg'
            alt='Carrinho'
            width={26}
            height={26}
            priority
          />
          <p>Carrinho</p>
        </div>
        <div className={styles.selection}>
          <Image 
            src='/favorites.svg'
            alt='favoritos'
            width={26}
            height={26}
            priority
          />
          <p>Favoritos</p>
        </div>
        <div className={styles.selection}>
          <Image 
            src='/user.svg'
            alt='User'
            width={26}
            height={26}
            priority
          />
          <p>User</p>
        </div>
      </nav>
      <div className={styles.divider}></div>
    </div>
  )
}
'use client'

import Image from 'next/image'
import styles from '../page.module.sass'
import Link from 'next/link'
import { useState } from 'react'
import SignIn from '../signin/page'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Main from '../components/Main'

export default function UserHome() {
  
  const [isLogged, setIsLogged] = useState<boolean>(true)
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  
  return (
    <>
      { !isLogged ?
        <SignIn /> :
        <Logged />
      }
    </>
  )
}

const Logged = () => {
  return (
    <div id={styles.basePage}>
      <Navbar />
      <div id={styles.content}>
        <Categories />
        <Main />
      </div>
    </div>
  )
}
'use client'

import { useContext } from 'react'
import styles from '../page.module.sass'
import SessionContext from '../contexts/SessionContext'

export default function Profile() {
  
  const session = useContext(SessionContext)

  return(
    <h1>Profile do {session.user}</h1>
  )
}
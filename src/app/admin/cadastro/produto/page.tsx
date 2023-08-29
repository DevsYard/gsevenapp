import Navbar from "@/app/components/Navbar"
import Image from 'next/image'
import styles from '../../page.module.sass'
import SessionContext from "@/app/contexts/SessionContext";
import { useContext } from "react";


export default function Produto() {
  const {isLogged, user} = useContext(SessionContext)

	return (
		<SessionContext.Provider value={{ isLogged, user }}>
			<Navbar user={user} />
			<h1>Cadastro de Produtos</h1>
		</SessionContext.Provider>
	);
}
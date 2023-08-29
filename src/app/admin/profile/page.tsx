import Navbar from "@/app/components/Navbar"
import Image from 'next/image'
import styles from '../../page.module.sass'
import { useContext } from "react";
import SessionContext from "@/app/contexts/SessionContext";


export default function Profile() {
  const {isLogged, user} = useContext(SessionContext)

	return (
		<SessionContext.Provider value={{ isLogged, user }}>
			<Navbar user={user} />
			<h1>Admin Profile</h1>
		</SessionContext.Provider>
	);
}
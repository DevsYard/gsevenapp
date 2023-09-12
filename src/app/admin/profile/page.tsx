import Navbar from "@/app/components/Navbar"
import Image from 'next/image'
import styles from '../../page.module.sass'
import { useContext } from "react";
import SessionContext from "@/app/contexts/SessionContext";


export default function Profile() {
  const session = useContext(SessionContext);

	return (
		<SessionContext.Provider value={session}>
			<Navbar user={session.user} />
			<h1>Admin Profile</h1>
		</SessionContext.Provider>
	);
}
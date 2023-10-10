import { createContext } from 'react';

interface isLoggedIn {
	isLogged: boolean;
	user: string;
	admin: boolean;
	token: string;
	userId: string;
	birth?: string;
	bio?: string;
	name: string;
}

const initialSession: isLoggedIn = {
	isLogged: false,
	userId: '',
	user: '',
	name: '',
	admin: false,
	token: '',
};

const SessionContext = createContext<isLoggedIn>(initialSession);

export default SessionContext;

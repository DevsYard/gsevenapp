import { createContext } from 'react';

interface isLoggedIn {
	isLogged: boolean;
	user: string;
	admin: boolean;
	token: string;
}

const initialSession: isLoggedIn = {
	isLogged: false,
	user: '',
	admin: false,
	token: '',
};

const SessionContext = createContext<isLoggedIn>(initialSession);

export default SessionContext;

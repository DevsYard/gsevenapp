import { createContext} from 'react';

interface isLoggedIn {
	isLogged: boolean;
	user: string
}

const SessionContext = createContext<isLoggedIn>({
	isLogged: false,
	user: ''
});

export default SessionContext;

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
	avatar?: string;
	favorites?: Array<Object>;
}

const initialSession: isLoggedIn = {
	isLogged: false,
	userId: '',
	user: '',
	name: '',
	avatar: '',
	admin: false,
	token: '',
	favorites: [],
};

const SessionContext = createContext<isLoggedIn>(initialSession);

export default SessionContext;

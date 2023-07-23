import { createContext, Dispatch, SetStateAction } from 'react';

interface isLoggedIn {
	auth: boolean;
	setAuth: Dispatch<SetStateAction<boolean>>;
}

const IsLogged = createContext<isLoggedIn>({
	auth: false,
	setAuth: () => {},
});

export default IsLogged;

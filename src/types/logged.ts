export interface isLoggedIn {
	isLogged: boolean;
	user: string;
	admin: boolean;
	token: string;
	userId?: string;
	birth?: string;
	bio?: string;
	avatar?: string;
	favorites?: [];
}

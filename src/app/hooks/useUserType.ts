import { useContext, useState } from 'react';
import SessionContext from '../contexts/sessionContext';

export default function useUserType() {
	const [userType, setUserType] = useState<'customer' | 'admin'>('customer');
	const { isLogged, admin, token } = useContext(SessionContext);

	return {
		exibeCustomer: () => {
			if (token) {
				if (isLogged && admin) {
					setUserType('admin');
				} else if (isLogged && !admin) {
					setUserType('customer');
				} else {
					alert('Você precisa estar logado para acessar essa página.');
				}
			}
		},
		userType: userType,
	};
}

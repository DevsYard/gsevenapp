import { useContext, useState } from 'react';

export default function useUserType() {
	const [userType, setUserType] = useState<'customer' | 'admin'>('customer');

	return {
		exibeCustomer: (isLogged: boolean, admin: boolean, token: string) => {
			if (isLogged && admin) {
				setUserType('admin');
			} else if (isLogged && !admin) {
				setUserType('customer');
			} else {
				alert('Você precisa estar logado para acessar essa página.');
			}
		},
		userType: userType,
	};
}

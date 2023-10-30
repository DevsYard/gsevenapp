'use client'

import SessionContext from '@/app/contexts/sessionContext';
import CartContext from '@/app/contexts/cartContext';
import { useContext } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Favorites from '../components/Favorites';
import Principal from '../components/Principal';
import CreateProduct from './products/create/page';
import EditProduct from './product/edit/[id]/page';
import Profile from './profile/page';
import Settings from './settings/page';
import { ICartItem } from '@/types/products';
import { isLoggedIn } from '@/types/logged';

export default function UserHome() {
	const session = useContext(SessionContext);
	const cart = useContext(CartContext);
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const renderMainContent = (session: any) => {
		const url = `${pathname}?${searchParams}`;

		if (url === 'userhome') {
			return <Principal />;
		} else if (url === `/favorites`) {
			return <Favorites />;
		} else if (url === `/products/create`) {
			return <CreateProduct />;
		} else if (url === `/products/edit`) {
			return <EditProduct />;
		} else if (url === `/profile`) {
			return <Profile />;
		} else if (url === `/settings`) {
			return <Settings />;
		} else {
			return <Principal />;
		}
	};

	return (
		<SessionContext.Provider value={session}>
			<CartContext.Provider value={cart}>
				<div>{renderMainContent(session)}</div>
			</CartContext.Provider>
		</SessionContext.Provider>
	);
}
